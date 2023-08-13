const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      s: {
        type: String,
        required: true,
      },
      l: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model('product', productSchema);

module.exports = {
  Product,
};
