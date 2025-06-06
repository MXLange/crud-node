import { query } from "../../infra/db/postgres.js";

export default {
    async list() {
        const result = await query("SELECT * FROM product");
        return result.rows;
    },

    async getById(id) {
        const result = await query("SELECT * FROM product WHERE id = $1", [id]);
        return result.rows[0];
    },

    async create({ name, price }) {
        const result = await query("INSERT INTO product (name, price) VALUES ($1, $2) RETURNING *", [name, price]);
        return result.rows[0];
    },

    async update(id, { name, price }) {
        const result = await query("UPDATE product SET name = $1, price = $2 WHERE id = $3 RETURNING *", [name, price, id]);
        return result.rows[0]; // undefined se não achou
    },

    async remove(id) {
        const result = await query("DELETE FROM product WHERE id = $1 RETURNING *", [id]);
        return result.rows[0]; // undefined se não achou
    },
};
