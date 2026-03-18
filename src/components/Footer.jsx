import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} MyShop. Всі права захищені.</p>
      <p>Зв'яжіться з нами: support@myshop.com</p>
    </footer>
  );
};

export default Footer;