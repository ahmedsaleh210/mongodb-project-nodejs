const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();

productRouter.post("/products/create", productController.createProduct);

productRouter.get("/products", productController.getAllProducts);

productRouter.get("/product/:id", productController.getProductById);

productRouter.put("/products/update/:id", productController.updateProduct);

productRouter.delete("/products/delete/:id", productController.deleteProduct);

module.exports = productRouter;
