import productService from "./product.service.js";

export default {
    async listProducts(req, res) {
        try {
            const products = await productService.listProducts();
            res.json(products);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async createProduct(req, res) {
        try {
            const newProduct = req.body;
            const result = await productService.createProduct(newProduct);
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async getProductById(req, res) {
        try {
            const productId = req.params.id;
            const product = await productService.getProductById(productId);
            if (!product) return res.status(404).send("Product not found");
            res.json(product);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const updatedData = req.body;
            const updated = await productService.updateProduct(productId, updatedData);
            if (!updated) return res.status(404).send("Product not found");
            res.send(`Product with ID ${productId} updated successfully`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            const deleted = await productService.deleteProduct(productId);
            if (!deleted) return res.status(404).send("Product not found");
            res.send(`Product with ID ${productId} deleted successfully`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};
