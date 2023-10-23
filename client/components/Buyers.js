import React, {useEffect, useState} from "react";

// would need to fetch product details saved in the database? 


const Buyers = () => {
  // define piece of state to represent an array of item objects we can map over
  const [items, setItems] = useState([]);

  // no idea where to correctly fetch data from... what would the URL be for he database
  const fetchItems = async () => {
    try {
      const response = await fetch('');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log('Event fetching data:', error);
    }
  };

  // want to make sure fetchItems is invoked as soon as page loads... was that a useEffect thing? barely understood it & not sure wtf its doing yet
  // found this syntax online, mentioned using a dependency array to ensure this effect runs on mount...
  useEffect(() => {
    fetchItems();
  }, []);
  
  console.log(items)

  // array right data type for state?
  // is "id" the right property?
  return (
    <>
      <h1>Product List</h1>
      <ul>
      {items.map(item => (
          <li key={item.sellers_id}>
            <h2>{item.item}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Buyers;