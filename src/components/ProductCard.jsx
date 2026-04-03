import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { Button, Card, Badge } from './ui';

const ProductCard = ({ id, name, price, category, inCart, image, toggleCart, removeProduct }) => {
  const { language } = useSettings();

  return (
    <Card hoverable style={{ position: 'relative', textAlign: 'center' }}>
      {/* Кнопка видалення */}
      <Button 
        variant="danger" 
        size="sm" 
        style={{ position: 'absolute', top: '10px', right: '10px', padding: '0.2rem 0.6rem', zIndex: 2 }}
        onClick={() => removeProduct(id)}
      >
        ×
      </Button>

      {/* Блок для картинки (завжди білий фон, фіксована висота) */}
      <div style={{ background: '#ffffff', padding: '1rem', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
      
      <Card.Body>
        <div>
          <Badge variant={inCart ? 'warning' : 'primary'}>{category}</Badge>
        </div>
        <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem', margin: '0.5rem 0' }}>{name}</h3>
        <p style={{ color: 'var(--color-success)', fontSize: '1.4rem', fontWeight: 'bold', margin: 0 }}>
          {price} грн
        </p>
      </Card.Body>

      <Card.Footer>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', flex: 1 }}>
          <Button variant="secondary" size="sm" style={{ width: '100%' }}>
            {language === 'ua' ? 'Деталі' : 'Details'}
          </Button>
        </Link>

        <Button 
          variant={inCart ? 'danger' : 'success'} 
          size="sm" 
          style={{ flex: 1 }}
          onClick={() => toggleCart(id)}
        >
          {inCart 
            ? (language === 'ua' ? 'В кошику ✔' : 'In Cart ✔') 
            : (language === 'ua' ? 'В кошик 🛒' : 'Add 🛒')}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;