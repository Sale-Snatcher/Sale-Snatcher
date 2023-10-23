import React, { useState } from 'react';

export const Seller = () => {
  const [itemNameField, setItemNameField] = useState('');
  const handleItemNameChange = input => {
    setItemNameField(input.target.value);
  };

  const [itemDescriptionField, setItemDescriptionField] = useState('');
  const handleItemDescriptionChange = input => {
    setItemDescriptionField(input.target.value);
  };

  const [itemPriceField, setItemPriceField] = useState('');
  const handleItemPriceChange = input => {
    setItemPriceField(input.target.value);
  };

  const addItem = () => {
    // const obj = {};
    // obj.name = itemNameField;
    // obj.description = itemDescriptionField;
    // obj.price = itemPriceField;
    // console.log(obj);

    fetch('/sellers/addItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: itemNameField,
        description: itemDescriptionField,
        price: itemPriceField,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        setItemNameField('');
        setItemDescriptionField('');
        setItemPriceField('');
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    // check if i can use onSubmit instead for enter button functionality + using forms
    <>
      <h1>Seller Page</h1>
      <input
        type='text'
        value={itemNameField}
        onChange={handleItemNameChange}
        placeholder='Item name'
      />
      <br />
      <input
        type='text'
        value={itemDescriptionField}
        onChange={handleItemDescriptionChange}
        placeholder='Item description'
      />
      <br />
      <input
        type='text'
        value={itemPriceField}
        onChange={handleItemPriceChange}
        placeholder='Item price'
      />
      <br />
      <button onClick={addItem}>Submit</button>
    </>
  );
};
