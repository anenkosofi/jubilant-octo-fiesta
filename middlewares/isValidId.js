const { isValidObjectId } = require('mongoose');
const {BadRequest} = require('http-errors');

const isValidId = (req, res, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    next(new BadRequest(`${productId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
