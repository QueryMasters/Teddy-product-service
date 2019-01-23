const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../db/PostgreSQL/index.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/api/products/', db.readProduct);
// app.post('/products/', db.createProduct);
// app.delete('/products/:id', db.deleteProduct);
// app.patch('/products/:id', db.updateProduct);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bundle.js'));
});

app.get('/:id', (req, res) => {
  db.readProduct(req.params)
    .then(products => res.status(202).send(products));
});

app.get('/api/products', (req, res) => {
  db.readProduct(req.query)
    .then(products => res.status(202).send(products));
});


