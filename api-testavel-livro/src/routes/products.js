const router = require('express').Router();

router.get('/', (req, res) => {
  const defaultProduct = {
    name: 'product',
    description: 'product description',
    price: 100
  } 

  res.send([defaultProduct]);
});

module.exports = router;
