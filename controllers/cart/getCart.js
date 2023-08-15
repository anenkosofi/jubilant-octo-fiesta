const { Cart } = require('../../models');

const getCart = async (req, res) => {
  const products = await Cart.find({}).populate('_id');
  res.json(products);
};

module.exports = getCart;
