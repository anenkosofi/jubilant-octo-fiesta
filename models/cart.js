const { Schema, model } = require('mongoose');
const Joi = require('joi');

const addProductSchema = Joi.object({
  ingredient: Joi.string().required(),
  quantity: Joi.string().required(),
});

const changeProductQtySchema = Joi.object({
  quantity: Joi.string().required(),
});

const cartSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = model('cart', cartSchema);

module.exports = {
  Cart,
  addProductSchema,
  changeProductQtySchema,
};
