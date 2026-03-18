import { useState, useEffect } from 'react';
import '../styles/RecommendedProducts.css';

const RecommendedProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchRecommended() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/products/category/smartphones');
        if (!response.ok) throw new Error(`Помилка: ${response.status}`);
        
        const data = await response.json();
        setItems(data.products);
      } catch (e) {
        setError(e.message || 'Помилка завантаження');
      } finally {
        setLoading(false);
      }
    }
    fetchRecommended();
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [items.length, currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="recommended-section">
      <h2>🔥 Топ продажів</h2>

      {loading && <div className="api-status loader">Завантаження... ⏳</div>}
      {error && <div className="api-status error-message">⚠️ {error}</div>}

      {!loading && !error && items.length > 0 && (
        <div className="slider-container">
          
          {/* Вікно слайдера (ховає те, що вилазить за межі) */}
          <div className="slider-window">
            {/* Довга стрічка з усіма товарами, яка плавно їздить */}
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div className="slider-card" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="slider-info">
                    <h4>{item.title}</h4>
                    <p className="slider-price">{Math.round(item.price * 40)} грн</p>
                    <span className="slider-brand">{item.brand || 'Хіт сезону'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button onClick={prevSlide} className="nav-btn">❮</button>
            <div className="slider-dots">
              {items.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
            <button onClick={nextSlide} className="nav-btn">❯</button>
          </div>

        </div>
      )}
    </section>
  );
};

export default RecommendedProducts;