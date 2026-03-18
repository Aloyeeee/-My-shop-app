import { useState } from 'react';
import '../styles/AddProductForm.css';

const AddProductForm = ({ addProduct, closeModal }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Електроніка');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category: category,
      inCart: false,
      image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&h=150&fit=crop`
    };

    addProduct(newProduct);
    
    setName('');
    setPrice('');
    setCategory('Електроніка');
    
    closeModal(); 
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {}
      <button type="button" className="close-modal-btn" onClick={closeModal}>×</button>
      
      <h3>Додати новий товар</h3>
      
      <input 
        type="text" 
        placeholder="Назва товару..." 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <input 
        type="number" 
        placeholder="Ціна (грн)..." 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Електроніка">Електроніка</option>
        <option value="Аксесуари">Аксесуари</option>
        <option value="Комп'ютери">Комп'ютери</option>
      </select>

      <button type="submit" className="submit-btn">Додати</button>
    </form>
  );
};

export default AddProductForm;