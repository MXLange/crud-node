import { Router } from "express";
import controller from "./company.controller.js";

const companyRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Company
 *   description: API para gerenciamento de empresas
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Retorna a lista de empresas
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Lista de empresas
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
 *                     example: Hakuna Matata Corp
 */
companyRoutes.get("/", controller.listCompanies);

/**
 * @swagger
 * /companies:
 *   post:
 *     summary: Cria uma nova empresa
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Hakuna Matata Corp
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Empresa Hakuna Matata Corp criada com sucesso
 */
companyRoutes.post("/", controller.createCompany);

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Retorna os detalhes de uma empresa pelo ID
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Detalhes da empresa
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
 *                   example: Hakuna Matata Corp
 *       404:
 *         description: Empresa não encontrada
 */
companyRoutes.get("/:id", controller.getCompanyById);

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Atualiza os detalhes de uma empresa pelo ID
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Hakuna Matata Corp Updated
 *     responses:
 *       200:
 *         description: Empresa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Empresa com ID 1 atualizada com sucesso
 *       404:
 *         description: Empresa não encontrada
 */
companyRoutes.put("/:id", controller.updateCompany);

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     summary: Deleta uma empresa pelo ID
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da empresa
 *     responses:
 *       200:
 *         description: Empresa deletada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Empresa com ID 1 deletada com sucesso
 */
companyRoutes.delete("/:id", controller.deleteCompany);

export default companyRoutes;
