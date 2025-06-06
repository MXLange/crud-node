import express from "express";
import cors from "cors";
import { config } from "./config.js";
import routes from "./router/routes.js";
import { setupSwagger } from "./swagger.js";

console.log(`Starting API on port ${config.apiPort}...`);
export default function start() {
    const app = express();

    // Middlewares globais
    app.use(cors());
    app.use(express.json());
    setupSwagger(app);
    app.use(routes);

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(config.apiPort, () => {
        console.log(`🚀 Server listening at http://localhost:${config.apiPort}`);
    });
}
