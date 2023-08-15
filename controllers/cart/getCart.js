const { Cart } = require('../../models');

const getCart = async (req, res) => {
  const products = await Cart.find({}).populate('product');
  res.json(products);
};

module.exports = getCart;
