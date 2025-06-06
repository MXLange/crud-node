import { query } from "../../infra/db/postgres.js";

export default {
    async list() {
        const result = await query("SELECT * FROM company");
        return result.rows;
    },

    async getById(id) {
        const result = await query("SELECT * FROM company WHERE id = $1", [id]);
        return result.rows[0] || null;
    },

    async create(company) {
        const result = await query("INSERT INTO company (name) VALUES ($1) RETURNING *", [company.name]);
        return result.rows[0];
    },

    async update(id, company) {
        const result = await query("UPDATE company SET name = $1 WHERE id = $2 RETURNING *", [company.name, id]);
        return result.rows[0] || null;
    },

    async remove(id) {
        const result = await query("DELETE FROM company WHERE id = $1 RETURNING *", [id]);
        return result.rows[0] || null;
    },
};
