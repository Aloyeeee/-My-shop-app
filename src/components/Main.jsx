import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import { useSettings } from '../context/SettingsContext';
import { Button } from './ui'; // Підключаємо нашу кнопку з UI Kit
import '../styles/Main.css';

const Main = ({ products = [], toggleCart, currentFilter, setFilter, addProduct, removeProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useSettings();

  return (
    <main className="main-content">
      {/* Панель керування: кнопка додавання + фільтри */}
      <div className="controls-header">
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          {language === 'ua' ? '+ Додати товар' : '+ Add Product'}
        </Button>

        <div className="filter-panel">
          <Button 
            variant={currentFilter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            {language === 'ua' ? 'Всі товари' : 'All Products'}
          </Button>
          <Button 
            variant={currentFilter === 'inCart' ? 'primary' : 'secondary'}
            onClick={() => setFilter('inCart')}
          >
            {language === 'ua' ? 'Тільки в кошику' : 'In Cart Only'}
          </Button>
        </div>
      </div>

      {/* Модальне вікно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddProductForm addProduct={addProduct} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Список товарів */}
      <ProductList items={products} toggleCart={toggleCart} removeProduct={removeProduct} />
    </main>
  );
};

export default Main;