const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
} = require("../controller/product.controller");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
router.post("/create-product", verifyToken, createProduct);
router.get("/product/:id", getProduct);
router.put("/wishlist", verifyToken, addToWishList);
router.put("/rating", verifyToken, rating);
router.get("/products", getAllProduct);
router.put("/update-product/:id", verifyToken, updateProduct);
router.delete("/delete-product/:id", verifyToken, deleteProduct);
module.exports = router;
