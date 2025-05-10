const Product = require("../models/productSchema");

const searchProducts = async (req, res) => {
  try {
    const query = req.query.query;
    const results = await Product.find({
      $or: [
        { name: new RegExp(query, "i") },
        { category: new RegExp(query, "i") },
        // Add other fields you want to search by if necessary
      ],
    });

    res.render("searchResults", { results, query });
  } catch (error) {
    console.error("Error in searchProducts:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { searchProducts };
