import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import { useSettings } from '../context/SettingsContext';
import '../styles/Main.css';

const Main = ({ products = [], toggleCart, currentFilter, setFilter, addProduct, removeProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useSettings();

  return (
    <main className="main-content">
      <div className="add-action-panel">
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          {language === 'ua' ? '+ Додати товар' : '+ Add Product'}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddProductForm addProduct={addProduct} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      <div className="filter-panel">
        <button 
          className={currentFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          {language === 'ua' ? 'Всі товари' : 'All Products'}
        </button>
        <button 
          className={currentFilter === 'inCart' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('inCart')}
        >
          {language === 'ua' ? 'Тільки в кошику' : 'In Cart Only'}
        </button>
      </div>

      <ProductList items={products} toggleCart={toggleCart} removeProduct={removeProduct} />
    </main>
  );
};

export default Main;