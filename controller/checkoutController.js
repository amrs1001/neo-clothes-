// controllers/checkoutController.js
const Order = require("../models/orderSchema");
const ShoppingCart = require("../models/shoppingCartSchema");

exports.processCheckout = async (req, res) => {
  const { userId } = req.cookies.user;
  const { fullName, email, address, phone, state, paymentMethod, cardDetails } = req.body;

  try {
    const cart = await ShoppingCart.findOne({ userId }).populate("products.productId");
    if (!cart || cart.products.length === 0) {
      return res.status(400).send("Cart is empty");
    }

    const orderData = {
      userId,
      products: cart.products,
      billingDetails: {
        fullName,
        email,
        address,
        phone,
        state,
      },
      paymentDetails: {
        method: paymentMethod,
        cardDetails: paymentMethod === "card" ? cardDetails : {},
      },
      totalAmount: cart.products.reduce((total, item) => total + item.productId.price * item.quantity, 0),
    };

    const order = new Order(orderData);
    await order.save();

    // Clear the cart after successful checkout
    cart.products = [];
    await cart.save();

    res.redirect("/orderSuccess"); // Redirect to a success page
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};