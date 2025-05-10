const mongoose = require("mongoose");

const shoppingCartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        
      },
    ],
  },
  { timestamps: true }
);

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

module.exports = ShoppingCart;
