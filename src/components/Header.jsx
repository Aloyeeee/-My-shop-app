import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Підключаємо хук теми
import { useSettings } from '../context/SettingsContext'; // Підключаємо хук мови
import '../styles/Header.css';

const Header = ({ title, cartCount }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useSettings();

  return (
    // Застосовуємо CSS-змінну для фону шапки
    <header className="app-header" style={{ backgroundColor: 'var(--header-bg)' }}>
      <div className="logo">
        <Link to="/" style={{ color: 'var(--btn-text)', textDecoration: 'none' }}>
          <h1>{title}</h1>
        </Link>
      </div>
      
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/" end>{language === 'ua' ? 'Головна' : 'Home'}</NavLink></li>
          <li><NavLink to="/catalog">{language === 'ua' ? 'Каталог' : 'Catalog'}</NavLink></li>
          <li><NavLink to="/about">{language === 'ua' ? 'Про нас' : 'About'}</NavLink></li>
          <li className="cart-badge">
             <NavLink to="/catalog" style={{ color: 'inherit', textDecoration: 'none' }}>
               {language === 'ua' ? 'Кошик' : 'Cart'} <span>({cartCount})</span>
             </NavLink>
          </li>
        </ul>
      </nav>

      {/* Панель перемикачів */}
      <div className="controls-panel">
        <button className="lang-btn" onClick={toggleLanguage}>
          {language === 'ua' ? 'EN' : 'UA'}
        </button>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;