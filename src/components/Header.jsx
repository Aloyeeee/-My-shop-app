import '../styles/Header.css';

const Header = ({ title, cartCount }) => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>{title}</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/">Головна</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li className="cart-badge">
             Кошик <span>({cartCount})</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;