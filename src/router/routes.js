import { Router } from "express";
import companyRoutes from "../domain/company/company.routes.js";
import productRoutes from "../domain/product/product.routes.js";

const routes = Router();

// Agrupamento de rotas
routes.use("/companies", companyRoutes);
routes.use("/products", productRoutes);

export default routes;
