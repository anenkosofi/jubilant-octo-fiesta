const { Product } = require('../../models');

const getProducts = async (req, res) => {
  const { page = 1, limit = 10, } = req.query;
  const products = await Product.find({}, '', {
    skip: (page - 1) * limit,
    limit: Number(limit),
  });
  res.json(products);
};

module.exports = getProducts;
