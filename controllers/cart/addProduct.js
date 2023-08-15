const { Cart } = require('../../models');

const addProduct = async (req, res) => {
  const product = await Cart.create({
    ...req.body,
  });

  res.status(201).json(product);
};

module.exports = addProduct;
