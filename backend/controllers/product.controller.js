import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // o {} seleciona todos os produtos
        res.status(200).json({ success: true, data: products });

    } catch(err) {
        console.log("Error in fetching products:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createProduct = async (req, res) => {
    console.log("Recebendo dados no backend:", req.body);
    const product = req.body; // Usuario vai enviar esses dados;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct });
    } catch (err) {
        console.log("Error in create the product:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) { // verifica se o id é válido
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true});
        res.status(200).json({ success: true, data: updatedProduct });

    } catch (err) {
        console.log("Error in update the product:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }


};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) { // verifica se o id é válido
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (err) {
        console.log("Error in delete the product:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

