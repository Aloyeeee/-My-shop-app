import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const INITIAL_PRODUCTS = [
  { id: 1, name: "Смартфон", price: 12999, category: "Електроніка", inCart: false, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&h=150&fit=crop" },
  { id: 2, name: "Навушники", price: 2499, category: "Аксесуари", inCart: false, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&h=150&fit=crop" },
  { id: 3, name: "Клавіатура", price: 1899, category: "Комп'ютери", inCart: false, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&h=150&fit=crop" },
  { id: 4, name: "Миша", price: 899, category: "Комп'ютери", inCart: false, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=200&h=150&fit=crop" },
  { id: 5, name: "Чохол", price: 299, category: "Аксесуари", inCart: false, image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=200&h=150&fit=crop" },
  { id: 6, name: "Монітор", price: 5500, category: "Електроніка", inCart: false, image: "https://images.unsplash.com/photo-1527443224154-c4a3d11d33f0?q=80&w=200&h=150&fit=crop" },
];

function App() {
  // 1. Зчитуємо дані з localStorage при першому рендері
  const [products, setProducts] = useState(() => {
    const savedData = localStorage.getItem('myshop-data');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return INITIAL_PRODUCTS;
  });

  const [filter, setFilter] = useState('all');

  // 2. Зберігаємо дані в localStorage при кожній зміні products
  useEffect(() => {
    localStorage.setItem('myshop-data', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const removeProduct = (id) => {
    const productToDelete = products.find(p => p.id === id);
    // Додано перевірку перед видаленням
    if (window.confirm(`Ви дійсно хочете видалити товар "${productToDelete.name}"?`)) {
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    }
  };

  const toggleCart = (id) => {
    setProducts((prevProducts) => 
      prevProducts.map(product => 
        product.id === id ? { ...product, inCart: !product.inCart } : product
      )
    );
  };

  const cartCount = products.filter(product => product.inCart).length;

  const filteredProducts = products.filter(product => {
    if (filter === 'inCart') {
      return product.inCart === true;
    }
    return true;
  });

  return (
    <div className="app">
      <Header title="🛒 MyShop - Ваш вибір" cartCount={cartCount} />
      <Main 
        products={filteredProducts} 
        toggleCart={toggleCart} 
        currentFilter={filter}
        setFilter={setFilter}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
      <Footer />
    </div>
  );
}

export default App;