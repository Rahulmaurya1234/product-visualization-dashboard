const express = require ("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Routes
// Get all products
router.get("/", getProducts);
// Get product by ID
router.get("/:id", getProductById);
// Create product
router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;