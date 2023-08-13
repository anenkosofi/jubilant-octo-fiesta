const { controller } = require('../../utils');

const getProducts = require('./getProducts');
const getProductById = require('./getProductById');


module.exports = {
  getProducts: controller(getProducts),
  getProductById: controller(getProductById),
};
