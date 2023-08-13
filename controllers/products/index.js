const { controller } = require('../../utils');

const getProducts = require('./getProducts');

module.exports = {
  getProducts: controller(getProducts),
};
