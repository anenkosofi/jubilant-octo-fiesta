const { Product } = require('../../models');
console.log('hehe');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

module.exports = getProducts;
