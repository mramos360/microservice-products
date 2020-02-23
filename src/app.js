const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product-routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/products", productRoutes);

module.exports = app;