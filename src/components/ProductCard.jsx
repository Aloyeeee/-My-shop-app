import '../styles/ProductCard.css';

const ProductCard = ({ id, name, price, category, image, inCart, toggleCart, removeProduct }) => {
  return (
    <div className={`product-card ${inCart ? 'selected' : ''}`}>
      
      {/* Кнопка видалення (хрестик у кутку) */}
      <button className="delete-btn" onClick={() => removeProduct(id)}>×</button>

      <img src={image} alt={name} className="product-image" />
      
      <div className="product-info">
        <h3>{name}</h3>
        <p className="category">Категорія: {category}</p>
        <p className="price">{price} грн</p>
        
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