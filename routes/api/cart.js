const { addProductSchema, changeProductQtySchema } = require('../../models');
const express = require('express');

const { cart } = require('../../controllers');
const { isValidId, isValidBody } = require('../../middlewares');

const router = express.Router();

router.get('/', cart.getCart);

router.post('/', isValidBody(addProductSchema), cart.addProduct);

router.put(
  '/:productId',
  isValidId,
  isValidBody(changeProductQtySchema),
  cart.changeProductQty
);

router.delete('/:productId', isValidId, cart.deleteProduct);

module.exports = router;
