import { useParams, Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';

const ProductDetailsPage = ({ products, toggleCart }) => {
  const { id } = useParams();
  const { language } = useSettings();
  const product = products.find(p => String(p.id) === id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-color)' }}>
        <h2>{language === 'ua' ? 'Товар не знайдено 😕' : 'Product not found 😕'}</h2>
        <Link to="/catalog" style={{ color: '#3498db' }}>
          {language === 'ua' ? '← Повернутися до каталогу' : '← Back to catalog'}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <Link to="/catalog" style={{ textDecoration: 'none', color: '#3498db', marginBottom: '1.5rem', display: 'inline-block', fontWeight: 'bold' }}>
        {language === 'ua' ? '← Назад до каталогу' : '← Back to catalog'}
      </Link>
      
      {/* Використовуємо CSS-змінні var(--card-bg) та var(--text-color) для підтримки темної теми */}
      <div style={{ background: 'var(--card-bg)', color: 'var(--text-color)', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px var(--card-shadow)', textAlign: 'center', transition: 'all 0.3s ease' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'contain', marginBottom: '1rem', background: 'white', borderRadius: '8px' }} />
        
        <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>{product.name}</h2>
        <span style={{ background: '#3498db', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
          {product.category}
        </span>
        <h3 style={{ color: '#2ecc71', fontSize: '1.8rem', marginTop: '1rem' }}>{product.price} грн</h3>
        
        <button
          style={{ background: product.inCart ? '#e74c3c' : '#3498db', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 'bold', width: '100%' }}
          onClick={() => toggleCart(product.id)}
        >
          {product.inCart 
            ? (language === 'ua' ? 'Видалити з кошика ❌' : 'Remove from Cart ❌') 
            : (language === 'ua' ? 'Додати в кошик 🛒' : 'Add to Cart 🛒')}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;