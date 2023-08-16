const { NotFound } = require('http-errors');

const { Cart } = require('../../models');

const changeProductQty = async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = await Cart.findByIdAndUpdate(
    {
      _id: productId,
    },
    req.body,
    { new: true }
  );
  if (!updatedProduct) {
    throw new NotFound(`Product with id=${productId} is not found`);
  }
  res.json(updatedProduct);
};

module.exports = changeProductQty;
