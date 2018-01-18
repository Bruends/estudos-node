const router = require('express').Router();

const ProductsController = require('../controllers/products');

const productsController = new ProductsController();
router.get('/', (req, res) => {
  productsController.get(req, res);
});

module.exports = router;
