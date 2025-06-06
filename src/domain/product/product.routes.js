import { Router } from "express";
import controller from "./product.controller.js";

const productRoutes = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retorna a lista de produtos
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Estrela do Norte
 *                   price:
 *                     type: number
 *                     example: 19.99
 */
productRoutes.get("/", controller.listProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Estrela do Norte
 *               price:
 *                 type: number
 *                 example: 19.99
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Produto Estrela do Norte criado com sucesso
 */
productRoutes.post("/", controller.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retorna os detalhes de um produto específico
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Detalhes do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Estrela do Norte
 *                 price:
 *                   type: number
 *                   example: 19.99
 *       404:
 *         description: Produto não encontrado
 */
productRoutes.get("/:id", controller.getProductById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Estrela do Norte Atualizado
 *               price:
 *                 type: number
 *                 example: 29.99
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Produto com ID 1 atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
productRoutes.put("/:id", controller.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Deleta um produto existente
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Produto com ID 1 deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
productRoutes.delete("/:id", controller.deleteProduct);

export default productRoutes;
