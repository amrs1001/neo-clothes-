const ShoppingCart = require("../models/shoppingCartSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const saveUser = async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  try {
    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await ShoppingCart.create({
      userId: newUser._id,
      products: [],
    });

    // const shoppingCart = await ShoppingCart.findOne({
    //   userId: newUser._id,
    // }).populate("userId product.productId");

    return res
      .status(200)
      .cookie("user", newUser, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      })
      .redirect("home");
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred");
  }
};

module.exports = { saveUser };
