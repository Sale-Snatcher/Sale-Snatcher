const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const db = require('./database/Models.js');

//handle parsing request body
app.use(express.json());
app.use(cors()); // playing with this... https://www.npmjs.com/package/cors 

//define routes -- any request that comes in goes straight to the routes
//have the request be sent to a wildcard and forward that to the index.html
app.post('/sellers/addItems', (req, res) => {
  const { item, description, price } = req.body;
  console.log(req.body);

  //   const text = `
  //     INSERT INTO sellers (item, description, price)
  //     VALUES ('${item}', '${description}', '${price}')
  //     `;

  //   console.log(text);

  //   db.query(text)
  //     .then(result => {
  //       console.log('Item: ', result);
  //       res.status(200).json({ message: 'Item added' });
  //     })
  //     .catch(error => {
  //       console.error('Error with adding item in server.js', error);
  //       res.status(500).json({ error: 'Server error' });
  //     });
  const text = `
  INSERT INTO sellers (item, description, price)
  VALUES ($1, $2, $3)
  `;
  const values = [item, description, price];

  db.query(text, values)
    .then(result => {
      console.log('Item: ', result);
      res.status(200).json({ message: 'Item added' });
    })
    .catch(error => {
      console.error('Error with adding item in server.js', error);
      res.status(500).json({ error: 'Server error' });
    });
});

app.get('/buyers/display', (req, res) => {
  console.log('Endpoint accessed');
  const text = `
    SELECT * FROM sellers;
    `;

  db.query(text).then(result => {
    console.log('Result: ', result);
    console.log('Result of rows: ', result.rows);
    res.status(200).json(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(
    `Server up & running on port ${PORT}... Hello April Helen Nick & Robert!!`,
  );
});
