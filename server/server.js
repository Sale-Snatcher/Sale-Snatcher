const express = require('express');
const app = express();
// const path = require('path');
const PORT = 3000;

const db = require('./database/Models.js');

//handle parsing request body
app.use(express.json());

//define routes -- any request that comes in goes straight to the routes
//have the request be sent to a wildcard and forward that to the index.html

//post request to add items
app.post('/sellers/addItems', (req, res) => {
    const { item, description, price } = req.body;
    // console.log('req.body', req.body);
    
    const text = `
    INSERT INTO sellers (item, description, price)
    VALUES ('${item}', '${description}', ${price});
    `

  db.query(text)
    .then(result => {
      console.log('Item: ', result);
      res.status(200).json({ message: 'Item added' });
    })
    .catch(error => {
      console.error('Error with adding item in server.js', error);
      res.status(500).json({ error: 'Server error' });
    });
});


//get request to display
app.get('/buyers/display', (req, res) => {
  console.log('Endpoint accessed');
  const text = `
    SELECT * FROM sellers;
    `;

  db.query(text)
    .then(result => {
    console.log('Result: ', result);
    console.log('Result of rows: ', result.rows);
    res.status(200).json(result.rows);
  })
    .catch((err) => {
        res.status(500).json({message: 'error when retrieving data from database'})
    })
});


//delete request to purchaseItem
app.delete('/buyers/display/purchaseItem', (req, res) => {
    const { item } = req.body;

    const text = `
        DELETE FROM sellers
        WHERE item = '${item}';
    `
    db.query(text)
        .then(response => {
            res.status(200).json({message: `${item} was purchased`})
        })
        .catch((err) => {
            res.staus(500).json({message: `unable to purchase ${item}`})
        })
})

app.listen(PORT, () => {
  console.log(
    `Server up & running on port ${PORT}...`,
  );
});
