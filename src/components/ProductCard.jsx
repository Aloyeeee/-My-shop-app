import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ id, name, price, category, image, inCart, toggleCart, removeProduct }) => {
  return (
    <div className={`product-card ${inCart ? 'selected' : ''}`}>
      
      {}
      <button className="delete-btn" onClick={() => removeProduct(id)}>×</button>

      <img src={image} alt={name} className="product-image" />
      
      <div className="product-info">
        <h3>{name}</h3>
        <p className="category">Категорія: {category}</p>
        <p className="price">{price} грн</p>
        {}
        <Link 
          to={`/product/${id}`} 
          style={{ display: 'block', margin: '0.5rem 0', color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Детальніше →
        </Link>
        
        <button 
          className={`buy-button ${inCart ? 'in-cart-btn' : ''}`}
          onClick={() => toggleCart(id)}
        >
          {inCart ? 'В кошику ✓' : 'Купити'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;