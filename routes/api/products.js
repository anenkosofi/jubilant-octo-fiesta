const express = require('express');

const { products} = require('../../controllers');

const router = express.Router();

router.get('/', products.getProducts);

module.exports = router;
