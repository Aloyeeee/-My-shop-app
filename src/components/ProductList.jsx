import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ items, toggleCart,removeProduct}) => {
  return (
    <section className="product-list">
      <h2>Наші товари</h2>
      
      {}
      {items.length === 0 ? (
        <div className="empty-message">
          <p>Тут поки нічого немає. Додайте товари до кошика! 🛒</p>
        </div>
      ) : (
        <div className="products-grid">
          {items.map((product) => (
            <ProductCard 
            key={product.id} 
            {...product} 
            toggleCart={toggleCart} 
            removeProduct={removeProduct}
          />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;