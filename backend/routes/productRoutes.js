const express = require ("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/productController");

// Routes
// Get all products
router.get("/products", getProducts);
// Get product by ID
router.get("/products/:id", getProductById);
// Create product
router.post("/products", createProduct);

module.exports = router;