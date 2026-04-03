import ProductCard from './ProductCard';
import { useSettings } from '../context/SettingsContext';

const ProductList = ({ items, toggleCart, removeProduct }) => {
  const { language } = useSettings();

  // Умовний рендеринг: якщо масив товарів порожній
  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-muted)' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
          {language === 'ua' ? 'Товарів не знайдено 😕' : 'No products found 😕'}
        </h2>
        <p style={{ fontSize: '1.1rem' }}>
          {language === 'ua' 
            ? 'Спробуйте змінити фільтр або додати нові товари.' 
            : 'Try changing the filter or adding new products.'}
        </p>
      </div>
    );
  }

  // Основний рендеринг списку (сітка товарів)
  return (
    <div className="product-list">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          inCart={product.inCart}
          image={product.image}
          toggleCart={toggleCart}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;