const { Cart } = require('../../models');

const addProduct = async (req, res) => {
  const { product: productId, quantity } = req.body;

  let cartItem = await Cart.findOne({ product: productId });

  if (cartItem) {
    cartItem.quantity = String(
      (Number(cartItem.quantity) || 0) + Number(quantity)
    );
  } else {
    cartItem = new Cart({
      product: productId,
      quantity: String(quantity),
    });
  }
  await cartItem.save();
  res.status(201).json(cartItem);
};

module.exports = addProduct;
