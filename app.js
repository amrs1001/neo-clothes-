const express = require("express");
const app = express();
const port = 3003;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/productSchema");
const User = require("./models/userSchema");
const contact = require("./models/contactMessageSchema");
const Admin = require("./models/adminSchema"); 
const authRoutes = require("./routes/loginRoutes");
const signRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminroutes"); // Ensure correct path
const shopRouts = require("./routes/shopRoutes");
const contactRouts = require("./routes/contactroutes");
const userRoutes = require("./routes/userRoutes");
const adminLoginRoutes=require("./routes/adminLoginRoutes")
const searchRoutes = require("./routes/searchRoutes");
const cookieParser = require("cookie-parser");
const userProfileRoutes = require("./routes/userProfileRoutes");
const methodOverride = require("method-override");
const ShoppingCart = require("./models/shoppingCartSchema");
const forgetPasswordRoutes = require('./routes/forgetPasswordRoutes');
const adminUserShowRoutes=require('./routes/adminUserRoute');
require('dotenv').config();




app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", { maxAge: "7d" }));
app.use(cookieParser());

app.use(methodOverride("_method"));

// Use routes
app.use(signRoutes);
app.use(authRoutes);
app.use("/admin", adminRoutes);
app.use(shopRouts);
app.use(contactRouts);
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use(userProfileRoutes);
app.use(adminLoginRoutes);
app.use('/',searchRoutes)
app.use(forgetPasswordRoutes);
app.use(adminUserShowRoutes)

// Redirect root to admin
app.get("/", (req, res) => {
  res.redirect("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/signUpRegister", (req, res) => {
  res.render("signUpregister");
});
app.get("/home", async (req, res) => {
  const { user } = req.cookies;

  let shoppingCart = {
      products: []
  };

  if (user) {
      const cart = await ShoppingCart.findOne({ userId: user._id }).populate("products.productId");
      if (cart) {
          shoppingCart = cart;
      } else {
          console.log('Shopping cart is empty or not defined.');
      }
  }
  res.render("home", { shoppingCart, user });
});

  app.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.render("usersss", { users });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
app.get("/logout", async(req, res) => {
  res.clearCookie("user", { path: '/' });
  console.log('User logged out successfully');
  await ShoppingCart.findOneAndUpdate({userId:req.cookies?.user?._id},{$set:{products:[]}});
  res.redirect("/home");
});


app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/checkout",async (req, res) => {
  const { user } = req.cookies;

  let shoppingCart = {product:[]};

  if (user) {
    shoppingCart = await ShoppingCart.findOne({ userId: user._id }).populate("products.productId");
    console.log(user,shoppingCart.products)}

  res.render("checkout", { shoppingCart, user });
})
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});
app.get("/forgetPassword", (req, res) => {
  res.render("forgetPassword");
});
app.get("/introPage", (req, res) => {
  res.render("introPage");
});
app.get("/policy", (req, res) => {
  res.render("policy");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/shop", (req, res) => {
  res.render("shop", { user: req.cookies.user });
});
app.get("/userProfile", (req, res) => {
const user = req.cookies.user;
if (user) {
    res.render("userProfile", { user });
} else {
    res.redirect("/login"); // Redirect to login if user is not found in cookies
}
});


app.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ _id: id });
    console.log(product, id);

    if (!product) {
      return res.send("Product not found");
    }
    res.render("productPage", { product });
  } catch (error) {
    return res.send("Product not found");
  }
});

mongoose.set("debug", true);

const dbURL =
  "mongodb+srv://serageldin2202771:L1ffC60zX7smdQUo@cluster0.2yodtb7.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
