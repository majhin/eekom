const Product = require("../models/Product");

// Add a new product
module.exports.createProduct = async function (req, res) {
	try {
		console.log(req.body);
		const { name, quantity } = req.body;
		const product = await Product.create({ name, quantity });
		res.status(201).json({ product });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// List all products
module.exports.listProducts = async function (req, res) {
	try {
		const products = await Product.find();
		res.json({ products });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// Delete a product by ID
module.exports.deleteProduct = async function (req, res) {
	try {
		const { id } = req.params;
		await Product.findByIdAndDelete(id);
		res.json({ message: "Product deleted" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// Update quantity of a product by ID
module.exports.updateProductQuantity = async function (req, res) {
	try {
		const { id } = req.params;
		const { number } = req.query;
		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ error: "Product not found" });
		}
		product.quantity += parseInt(number);
		await product.save();
		res.json({ product, message: "Updated successfully" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
