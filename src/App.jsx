import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Імпортуємо маршрутизацію
import Header from './components/Header';
import Footer from './components/Footer';

// Імпортуємо сторінки
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import './styles/App.css';

// ... (твій INITIAL_PRODUCTS залишається тут без змін) ...

function App() {
  const [products, setProducts] = useState(() => {
    const savedData = localStorage.getItem('myshop-data');
    return savedData ? JSON.parse(savedData) : INITIAL_PRODUCTS;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('myshop-data', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => setProducts(prev => [...prev, newProduct]);
  
  const removeProduct = (id) => {
    if (window.confirm('Видалити товар?')) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  const toggleCart = (id) => {
    setProducts(prev => prev.map(product => product.id === id ? { ...product, inCart: !product.inCart } : product));
  };

  const cartCount = products.filter(product => product.inCart).length;
  const filteredProducts = products.filter(product => filter === 'inCart' ? product.inCart : true);

  return (
    <div className="app">
      <Header title="🛒 MyShop" cartCount={cartCount} />
      
      {/* МАРШРУТИЗАЦІЯ */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/catalog" element={
          <CatalogPage 
            products={filteredProducts} 
            toggleCart={toggleCart} 
            currentFilter={filter}
            setFilter={setFilter}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        } />
        
        <Route path="/about" element={<AboutPage />} />
        
        {/* Динамічний маршрут */}
        <Route path="/product/:id" element={<ProductDetailsPage products={products} toggleCart={toggleCart} />} />
        
        {/* Сторінка 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;