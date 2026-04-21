import { Pool } from "pg";

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "finance_app",
    password: "12345",
    port: 5432,
});

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};