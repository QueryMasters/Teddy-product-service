require('newrelic');
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db/PostgreSQL/index.js');

const app = express();
const PORT = 3001;

const redis = require('redis'); // redis
const client = redis.createClient(
  // {
  // host: process.env.REDIS_HOST,
  // password: process.env.REDIS_PW}
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

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

// app.get('/:id', (req, res) => {
//   db.readProduct(req.params)
//     .then(products => res.status(200).send(products))
//     .catch((err) => {
//       res.sendStatus(500)
//     })
// });

app.get('/api/products', (req, res) => {
  client.get(`products${req.query.id}` , (err, result) => {
    if (err) {
      console.log('ERROR: Redis is broken');
      res.status(404).send(err);
    }
    if (result) {
      res.status(200).send(result);
    } else {
      db.readProduct(req.query)
      .then((products) => {
        const redisKey = `products${req.query.id}`;
        client.set(`${redisKey}`, `${JSON.stringify(products)}`, 'EX', 6000);
        res.status(200).send(products)})
      .catch((err) => {
        res.sendStatus(500)
      });
    }
  });
});


