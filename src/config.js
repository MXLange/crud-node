export const config = {
    environment: process.env.ENVITONMENT || "development",
    apiPort: process.env.API_PORT || 8888,
    pgHost: process.env.PG_HOST || "localhost",
    pgPort: process.env.PG_PORT || 5432,
    pgUser: process.env.PG_USER || "postgres",
    pgPassword: process.env.PG_PASSWORD || "postgres",
    pgDatabase: process.env.PG_DATABASE || "postgres",
    pgMaxConns: process.env.PG_MAX_CONNECTIONS || 20,
    pgMinConns: process.env.PG_MIN_CONNECTIONS || 1,
};
