import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
// import '../styles/ProductCard.css'; // твій імпорт стилів

const ProductCard = ({ id, name, price, category, inCart, image, toggleCart, removeProduct }) => {
  const { language } = useSettings();

  return (
    <div className={`product-card ${inCart ? 'in-cart' : ''}`} style={{ background: 'var(--card-bg)', color: 'var(--text-color)' }}>
      <button className="remove-btn" onClick={() => removeProduct(id)} title={language === 'ua' ? 'Видалити товар' : 'Delete product'}>×</button>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} грн</p>
        
        <Link 
          to={`/product/${id}`} 
          style={{ display: 'block', margin: '0.5rem 0', color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}
        >
          {language === 'ua' ? 'Детальніше →' : 'Details →'}
        </Link>

        <button className="buy-btn" onClick={() => toggleCart(id)}>
          {inCart 
            ? (language === 'ua' ? 'В кошику ✔' : 'In Cart ✔') 
            : (language === 'ua' ? 'Купити 🛒' : 'Buy 🛒')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;