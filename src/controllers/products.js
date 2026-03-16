const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const products = [];
router.get('/', (req, res) => {
  res.json(products);
});
router.post('/', (req, res) => {
  const product = new Product(req.body.id, req.body.name, req.body.price);
  products.push(product);
  res.json(product);
});
module.exports = router;