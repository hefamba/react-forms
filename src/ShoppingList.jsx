import React, { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, productName: 'Apples', qty: 7 },
    { id: 2, productName: 'Pie', qty: 1 },
  ]);

  const addItem = (item) => {
    setItems((prev) => {
      return [...items, { ...item, id: 8 }];
    });
  };

  return (
    <div>
      <h1>Shopping List:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productName} - {item.qty}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
