import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import { config } from "./config.js";
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Minha API",
            version: "1.0.0",
            description: "Documentação da API",
        },
        servers: [
            {
                url: `http://localhost:${config.apiPort}`,
                description: "Servidor Local",
            },
        ],
    },
    apis: ["./src/domain/**/*.routes.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Debug: gera arquivo swagger.json para validar
fs.writeFileSync("./src/swagger.json", JSON.stringify(swaggerSpec, null, 2));

export function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
