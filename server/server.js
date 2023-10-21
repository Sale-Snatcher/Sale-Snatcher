const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;  

const db = require('./database/Models.js');

//handle parsing request body
app.use(express.json());

//define routes -- any request that comes in goes straight to the routes
//have the request be sent to a wildcard and forward that to the index.html
app.get('./sellers/addItems', (req, res) => {
    const { item, description, price } = req.body;

    const text = `
    INSERT INTO sellers (item, desciption, price)
    VALUES (${item}, ${description}, ${price})
    `;

    db.query(text)
});





app.listen(PORT, () =>{
    console.log(`Server up & running on port ${PORT}... Hello April Helen Nick & Robert!!`)
})