class ProductsController {
  get(req, res) {
    res.send([
      {
        name: 'product',
        description: 'product description',
        price: 100
      } 
    ])
  }
}

module.exports = ProductsController;
