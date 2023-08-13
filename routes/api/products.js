const express = require('express');

const { products} = require('../../controllers');
const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', products.getProducts);

router.get('/:productId', isValidId, products.getProductById);

module.exports = router;
