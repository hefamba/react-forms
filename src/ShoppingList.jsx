import React, { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: 'Apples', quantity: 7 },
    { id: 2, product: 'Pie', quantity: 1 },
  ]);

  const addItem = (item) => {
    setItems((prev) => {
      return [...prev, { ...item, id: 9 }];
    });
  };

  return (
    <div>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
