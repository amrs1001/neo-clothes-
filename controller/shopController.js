const Product = require("../models/productSchema");
const ShoppingCart = require("../models/shoppingCartSchema");

exports.getShop = async (req, res) => {
  try {
    const products = await Product.find();
    const hoodies = products.filter(
      (product) => product.category === "hoodies"
    );
    const shirts = products.filter((product) => product.category === "shirts");
    const jackets = products.filter(
      (product) => product.category === "jackets"
    );

    res.render("shop", { hoodies, shirts, jackets });
    // res.render('shop', {products})
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//POST /addToCart

exports.addToCart = async (req, res) => {
  const { quantity, productId } = req.body;
  const { _id: userId } = req.cookies?.user;

  if (userId === undefined) {
    return res.send('<script>alert("You must log in to add items to your cart."); window.location.href = "/shop";</script>');

  }

  try {
    await ShoppingCart.findOneAndUpdate(
      { userId },
      {
        $push: {
          products: {
            productId,
            quantity,
          },
        },
      },
      { upsert: true }
    );

    return res.redirect("shop");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
