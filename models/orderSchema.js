// models/orderSchema.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    billingDetails: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
      state: { type: String, required: true },
    },
    paymentDetails: {
      method: { type: String, required: true },
      cardDetails: {
        nameOnCard: { type: String },
        cardNumber: { type: String },
        expMonth: { type: String },
        expYear: { type: String },
        cvv: { type: String },
      },
    },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;