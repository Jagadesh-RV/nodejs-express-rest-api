
const ProductRepository = require('./repositories/product.repository');
const ProductService = require('./services/product.service');

const repo = new ProductRepository();
const service = new ProductService(repo);

// Export these if you need them for your Express routes
module.exports = { service };