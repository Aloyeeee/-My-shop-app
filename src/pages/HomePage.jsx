import RecommendedProducts from '../components/RecommendedProducts';
import { useSettings } from '../context/SettingsContext';

const HomePage = () => {
  const { language } = useSettings(); // Отримуємо поточну мову

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'var(--text-color)', fontSize: '2.5rem', margin: '0 0 1rem 0' }}>
        {language === 'ua' ? 'Вітаємо у MyShop! 🎉' : 'Welcome to MyShop! 🎉'}
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '3rem' }}>
        {language === 'ua' ? 'Найкраща техніка за найвигіднішими цінами.' : 'The best tech at the best prices.'}
      </p>
      
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default HomePage;