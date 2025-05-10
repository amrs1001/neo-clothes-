const Products = require('../models/productSchema');
const ShopProduct = require('../models/shopProductSchema');
const User = require('../models/userSchema');

const AddProducts = (req, res) => {
    const { name, price, category, quantity } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validate input
    if (!name || !price || !category || !quantity || !image) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Validate numeric fields
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        return res.status(400).json({ success: false, message: "Price and quantity must be valid numbers greater than zero" });
    }

    // Add products to shop
    const newshopProduct = new ShopProduct({ name, price, image, category });
    newshopProduct.save();

    const newProduct = new Products({
        name,
        price,
        category,
        quantity,
        image
    });

    newProduct.save()
        .then(result => {
            console.log(result);
            res.status(201).json({ success: true, message: "Product added successfully" });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Error adding product" });
        });
};

const getProducts = (req, res) => {
    Products.find()
        .then(products => {
            res.render('admin', { products });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error retrieving products");
        });
};

const deleteProduct = (req, res) => {
    const productId = req.body.id;

    Products.findByIdAndDelete(productId)
        .then(result => {
            console.log(result);
            res.status(200).json({ success: true, message: "Product deleted successfully" });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Error deleting product" });
        });
};


const editProduct = (req, res) => {
    const { name, price, category, quantity } = req.body;
    let image = req.file ? req.file.filename : null;

    // Validate input
    if (!name || !price || !category || !quantity) {
        return res.status(400).send("All fields are required");
    }

    // Validate numeric fields
    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        return res.status(400).send("Price and quantity must be valid numbers greater than zero");
    }

    // Handle image update: If no new image uploaded, retain existing image
    if (!image) {
        Products.findById(req.params.id)
            .then(product => {
                image = product.image; // Use existing image if no new image uploaded
                updateProduct(req.params.id, name, price, category, quantity, image, res);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send("Product not found");
            });
    } else {
        updateProduct(req.params.id, name, price, category, quantity, image, res);
    }
};

// Helper function to update product details in the database
function updateProduct(id, name, price, category, quantity, image, res) {
    const updateData = { name, price, category, quantity, image };

    Products.findByIdAndUpdate(id, updateData, { new: true })
        .then(result => {
            console.log(result);
            res.status(200).send("Product updated successfully");
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error updating product");
        });
}

const getUserCount = async (req, res) => {
    try {
      const userCount = await User.countDocuments({});
      res.status(200).json({ userCount });
    } catch (error) {
      console.error("Error counting users:", error);
      res.status(500).send("Internal Server Error");
    }
  };
module.exports = { AddProducts, getProducts, deleteProduct, editProduct ,getUserCount};
