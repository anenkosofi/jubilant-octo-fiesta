const { NotFound } = require('http-errors');

const { Cart } = require('../../models');

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Cart.findByIdAndRemove({ _id: id });

  if (!product) {
    throw new NotFound(`Product with id: ${id} is not found`);
  }
  res.status(200).json({
    message: 'Product deleted successfully',
  });
};

module.exports = deleteProduct;
