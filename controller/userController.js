const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const ShoppingCart = require("../models/shoppingCartSchema");

const createUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;
    const newUser = new User({ fullName, email, phoneNumber, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const saveUser = async (req, res) => {
  const { fullName, email, phoneNumber, password, confirmPassword } = req.body;

  // Server-side validation
  if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
    return res.status(400).send("All fields are required.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send("Invalid email format.");
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res
      .status(400)
      .send("Invalid phone number format. It should be a 10-digit number.");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  if (password.length < 6) {
    return res.status(400).send("Password must be at least 6 characters long.");
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email is already registered.");
    }

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
    return res.status(500).send("An error occurred.");
  }
};

module.exports = { createUser, saveUser };
