import { useParams, Link } from 'react-router-dom';

const ProductDetailsPage = ({ products, toggleCart }) => {
  const { id } = useParams(); // Отримуємо ID з URL
  
  // Шукаємо товар у масиві (перетворюємо id на рядок для точного порівняння)
  const product = products.find(p => String(p.id) === id);

  // Якщо товар не знайдено (користувач ввів неправильний URL)
  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Товар не знайдено 😕</h2>
        <Link to="/catalog">← Повернутися до каталогу</Link>
      </div>
    );
  }

  // Якщо товар знайдено, малюємо його картку
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/catalog" style={{ textDecoration: 'none', color: '#3498db', marginBottom: '1.5rem', display: 'inline-block', fontWeight: 'bold' }}>
        ← Назад до каталогу
      </Link>
      
      <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'contain', marginBottom: '1rem' }} />
        <span style={{ background: '#f1f2f6', padding: '0.3rem 0.8rem', borderRadius: '20px', color: '#7f8c8d', fontSize: '0.9rem' }}>{product.category}</span>
        <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>{product.name}</h2>
        <h3 style={{ color: '#2ecc71', fontSize: '1.8rem' }}>{product.price} грн</h3>
        
        <button
          style={{ background: product.inCart ? '#e74c3c' : '#3498db', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 'bold' }}
          onClick={() => toggleCart(product.id)}
        >
          {product.inCart ? 'Видалити з кошика ❌' : 'Додати в кошик 🛒'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;