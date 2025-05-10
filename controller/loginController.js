const ShoppingCart = require("../models/shoppingCartSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send("email not found"); // End the function execution here
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordMatch) {
      console.log("login successful");
      console.log('welcome to home page ${user.email} ${user._id}'); // Use user.email instead

      return res
        .cookie("user", user, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        })
        .redirect("/home");
    } else {
      return res.send("wrong password");
    }
  } catch (error) {
    console.error(error); // Log the actual error
    return res.send("An error occurred");
  }
};

module.exports = { loginUser };