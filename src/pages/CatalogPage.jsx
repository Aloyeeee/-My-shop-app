import Main from '../components/Main';

const CatalogPage = ({ products, toggleCart, currentFilter, setFilter, addProduct, removeProduct }) => {
  return (
    <div className="page-container catalog-page">
      <h2 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '2rem', marginBottom: '1.5rem' }}>
        Каталог товарів
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