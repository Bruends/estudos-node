class ProductsController {
  constructor(product){
    this.Product = product;
  }

  get(req, res) {
    return this.Product.find({})
      .then(products => res.send(products));
  }
}

module.exports = ProductsController;
