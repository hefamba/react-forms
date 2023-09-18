import React from 'react';
import { useState } from 'react';
import ShoppingList from './ShoppingList';

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: '', quantity: '' });
  const handleChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addItem(formData);
    setFormData({ product: '', quantity: '' });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="product name"
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product}
        />

        <label htmlFor="quantity">quantity</label>
        <input
          type="number"
          placeholder={1}
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity}
        />
        <button>AddItem</button>
      </form>
    </div>
  );
}
