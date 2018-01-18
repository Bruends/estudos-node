const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');

describe('Controllers: Products', () => {
  const defaultProduct = {
    name: 'product',
    description: 'product description',
    price: 100
  } 

  describe('get() products', () => {
    it('should return a list of products', () => {
      const productsController = new ProductsController();

      const request = {};
      const response = {
        send: sinon.spy()
      }

      productsController.get(request, response);

      expect(response.send.called).to.be.true;

      expect(response.send.calledWith([defaultProduct])).to.be.true;
    })
  });
});