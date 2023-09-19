import React, { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: 'Apples', quantity: 7 },
    { id: uuid(), product: 'Pie', quantity: 1 },
  ]);

  const addItem = (item) => {
    setItems((prev) => {
      return [...prev, { ...item, id: uuid() }];
    });
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((e) => id !== e.id);
    });
  };

  return (
    <div>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => deleteItem(item.id)}
            style={{ cursor: 'pointer' }}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
