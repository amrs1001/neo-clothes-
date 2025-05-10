const express = require("express");
const router = express.Router();
const multer = require("multer");
const shopController = require("../controller/shopController");
const ShopProduct = require("../models/shopProductSchema");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

// Route to render shop.ejs
router.get("/shop", shopController.getShop);

router.post("/addToCart", shopController.addToCart);

// Route to handle product addition
router.post("/admin/addProduct", upload.single("image"), async (req, res) => {
  const { name, category, quantity, price } = req.body;
  const imagePath = req.file.path.replace("public", "");

  try {
    const newProduct = new ShopProduct({
      name,
      category,
      quantity,
      price,
      imagePath,
    });

    await newProduct.save();
    res.redirect("/shop");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
