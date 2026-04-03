import { useState } from 'react';
import { Button, Input } from './ui'; // Використовуємо наш UI Kit
import { useSettings } from '../context/SettingsContext';

const AddProductForm = ({ addProduct, closeModal }) => {
  const { language } = useSettings();
  const [formData, setFormData] = useState({ name: '', price: '', category: 'Smartphone', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    addProduct({ ...formData, id: Date.now(), price: Number(formData.price), inCart: false });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ color: 'var(--text-color)', marginBottom: '1.5rem' }}>
        {language === 'ua' ? 'Новий товар' : 'New Product'}
      </h2>
      
      <Input 
        label={language === 'ua' ? "Назва" : "Name"} 
        placeholder={language === 'ua' ? "Введіть назву..." : "Enter name..."}
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />

      <Input 
        label={language === 'ua' ? "Ціна (грн)" : "Price (UAH)"} 
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
        required
      />

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: 'var(--text-color)' }}>
          {language === 'ua' ? 'Категорія' : 'Category'}
        </label>
        <select 
          style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--text-color)' }}
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
          <option value="Audio">Audio</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        <Button type="button" variant="secondary" onClick={closeModal} style={{ flex: 1 }}>
          {language === 'ua' ? 'Скасувати' : 'Cancel'}
        </Button>
        <Button type="submit" variant="primary" style={{ flex: 1 }}>
          {language === 'ua' ? 'Створити' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;