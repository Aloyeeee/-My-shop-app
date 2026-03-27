import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#e74c3c', margin: 0 }}>404</h1>
      <h2>Ой! Сторінку не знайдено.</h2>
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
};

export default NotFoundPage;