import { useSettings } from '../context/SettingsContext';

const AboutPage = () => {
  const { language } = useSettings();

  return (
    <div className="page-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: 'var(--text-color)' }}>
        {language === 'ua' ? 'Про застосунок MyShop' : 'About MyShop App'}
      </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem', color: 'var(--text-color)' }}>
        {language === 'ua' 
          ? 'Цей інтернет-магазин розроблений у рамках лабораторних робіт з React. Він демонструє роботу зі станами, хуками useEffect, локальним сховищем, асинхронними запитами до API, маршрутизацією та Context API!' 
          : 'This online store was developed as part of React laboratory works. It demonstrates working with states, useEffect hooks, local storage, asynchronous API requests, routing, and Context API!'}
      </p>
    </div>
  );
};

export default AboutPage;