const {NotFound} = require('http-errors');
const { Product } = require('../../models');

const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById({ _id: productId });
  if (!product) {
    throw new NotFound(`Product with id=${productId} is not found`);
  }
  res.json(product);
};

module.exports = getProductById;
