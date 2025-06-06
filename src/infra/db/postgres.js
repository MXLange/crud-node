import { config } from "../../config.js";

import { Pool } from "pg";

console.log(config);

console.log(`Connecting to PostgreSQL at ${config.pgHost}:${config.pgPort} with user ${config.pgUser} and database ${config.pgDatabase}`);
const pool = new Pool({
    host: config.pgHost,
    port: config.pgPort,
    user: config.pgUser,
    password: config.pgPassword,
    database: config.pgDatabase,
    max: config.pgMaxConns,
    min: config.pgMinConns,
});

export async function query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Executed query", { text, duration, rows: res.rowCount });
    return res;
}

if (config.environment === "development") {
    console.log("Running migrations for development environment");
    // await pool.query("DROP TABLE IF EXISTS company, product CASCADE;");

    await pool.query(`
        CREATE TABLE IF NOT EXISTS company (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE
            );`);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS product (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            price NUMERIC(10,2) NOT NULL
            );`);
}
