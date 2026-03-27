import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ title, cartCount }) => {
  return (
    <header className="app-header">
      <div className="logo">
        {}
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <h1>{title}</h1>
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/" end>Головна</NavLink></li>
          <li><NavLink to="/catalog">Каталог</NavLink></li>
          <li><NavLink to="/about">Про нас</NavLink></li>
          <li className="cart-badge">
             {/* Робимо кошик клікабельним — він буде вести в Каталог */}
             <NavLink to="/catalog" style={{ color: 'inherit', textDecoration: 'none' }}>
               Кошик <span>({cartCount})</span>
             </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;