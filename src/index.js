const express = require('express');
const app = express();
const port = 3000;
const productController = require('./controllers/products');
const orderController = require('./controllers/orders');
app.use(express.json());
app.use('/products', productController);
app.use('/orders', orderController);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});