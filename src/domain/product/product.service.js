import productRepository from "./product.repository.js";

export default {
    async listProducts() {
        return await productRepository.list();
    },

    async getProductById(id) {
        const product = await productRepository.getById(id);
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return product;
    },

    async createProduct(productData) {
        // Validação antes de criar, se quiser
        return await productRepository.create(productData);
    },

    async updateProduct(id, productData) {
        const updatedProduct = await productRepository.update(id, productData);
        if (!updatedProduct) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return updatedProduct;
    },

    async deleteProduct(id) {
        const deletedProduct = await productRepository.remove(id);
        if (!deletedProduct) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return deletedProduct;
    },
};
