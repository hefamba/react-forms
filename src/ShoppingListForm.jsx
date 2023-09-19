import React from 'react';
import { useState } from 'react';
import ShoppingList from './ShoppingList';

export default function ShoppingListForm({ addItem }) {
  const [productValid, setProductValid] = useState(false);
  const [formData, setFormData] = useState({ product: '', quantity: '' });
  const validate = () => {
    if (product.length === 0) {
      setProductValid(false);
    } else {
      setProductValid(true);
    }
  };
  const handleChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;

    if (changeField === 'product') {
      validate(newValue);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productValid) {
      addItem(formData);
      setFormData({ product: '', quantity: '' });
    }
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
        {!productValid && (
          <p style={{ color: 'red' }}>* Product cannot be empty</p>
        )}

        <label htmlFor="quantity">quantity</label>
        <input
          type="number"
          placeholder={1}
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity}
        />
        <button disabled={!productValid}>AddItem</button>
      </form>
    </div>
  );
}
