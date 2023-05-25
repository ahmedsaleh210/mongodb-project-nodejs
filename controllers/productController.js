const ProductModel = require("../models/productModel");
async function createProduct(req, res) {
  const { name, quantity, image } = req.body;
  if ((!name, !quantity)) {
    res.status(500).json({ message: "Name & Quantity are required" });
  }
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "cannot find product" });
    }
    res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "cannot find product" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
}
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
