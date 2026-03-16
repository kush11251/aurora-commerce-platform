const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const orders = [];
router.get('/', (req, res) => {
  res.json(orders);
});
router.post('/', (req, res) => {
  const order = new Order(req.body.id, req.body.products);
  orders.push(order);
  res.json(order);
});
module.exports = router;