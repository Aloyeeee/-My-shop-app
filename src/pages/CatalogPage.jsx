import Main from '../components/Main';
import { useSettings } from '../context/SettingsContext';

const CatalogPage = ({ products, toggleCart, currentFilter, setFilter, addProduct, removeProduct }) => {
  const { language } = useSettings();

  return (
    <div className="page-container catalog-page">
      <h2 style={{ textAlign: 'center', color: 'var(--text-color)', fontSize: '2rem', marginBottom: '1.5rem' }}>
        {language === 'ua' ? 'Каталог товарів' : 'Product Catalog'}
      </h2>
      
      <Main 
        products={products} 
        toggleCart={toggleCart} 
        currentFilter={currentFilter}
        setFilter={setFilter}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default CatalogPage;