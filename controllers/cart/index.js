const { controller } = require('../../utils');

const getCart = require('./getCart');
const addProduct = require('./addProduct');
const changeProductQty = require('./changeProductQty');
const deleteProduct = require('./deleteProduct');

module.exports = {
  getCart: controller(getCart),
  addProduct: controller(addProduct),
  changeProductQty: controller(changeProductQty),
  deleteProduct: controller(deleteProduct),
};
