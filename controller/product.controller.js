//controllador
const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {//crea y sube a mongo
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {//si no existe
            return res.status(404).json({ message: "No se encontró el producto" });
        }
        const UpdatedProduct = await Product.findById(id);
        res.status(200).json(UpdatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {//si no existe
            return res.status(404).json({ message: "No se encontró el producto" });
        }
        res.status(200).json({ message: "borrado existosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };

