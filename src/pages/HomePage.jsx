import RecommendedProducts from '../components/RecommendedProducts';

const HomePage = () => {
  return (

    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', margin: '0 0 1rem 0' }}>
        Вітаємо у MyShop! 🎉
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '3rem' }}>
        Найкраща техніка за найвигіднішими цінами.
      </p>
      
      {}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default HomePage;