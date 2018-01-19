const sinon = require('sinon');

const ProductsController = require('../../../src/controllers/products');
const Product = require('../../../src/models/product');

describe('Controllers: Products', () => {
  const defaultProduct = {
    name: 'product',
    description: 'product description',
    price: 100
  } 

  describe('get() products', () => {
    it('should call send with a list of products', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      }

      Product.find = sinon.stub();
      
      Product.find.withArgs({}).resolves(defaultProduct);
      const productsController = new ProductsController(Product);
     
      return productsController.get(request, response)
        .then(() => {
          sinon.assert.calledWith(response.send, defaultProduct);
        });
    });
  });

  describe('should return 400 when an error occurs', () => {
    const request = {};
    const response = {
      send: sinon.spy(),
      status: sinon.stub()
    };

    response.status.withArgs(400).returns(response);
    Product.find = sinon.stub();
    Product.find.withArgs({}).rejects({
      message: 'Error'
    })

    const productsController = new ProductsController(Product);

    return productsController.get(request, response)
      .then(() => {
        sinon.assert.calledWith(response.send, 'Error')
      });
  });

  

});