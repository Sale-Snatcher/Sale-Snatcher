import React, { useEffect, useState } from 'react';

// would need to fetch product details saved in the database?

const Buyers = () => {
  // define piece of state to represent an array of item objects we can map over
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/buyers/display')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log('Event fetching data:', err));
  }, []);

  console.log(items);

  const effect = item => {
    fetch('/buyers/purchaseItem', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: item.item,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
      })
      .catch(err => {
        console.log('Error with purchaseItem in buyers.js', err);
      });
  };

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {items.map(item => (
          <li key={item.sellers_id}>
            <h2>{item.item}</h2>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => effect(item)}>Buy!</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buyers;
