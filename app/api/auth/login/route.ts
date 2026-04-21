import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await pool.query(
        `SELECT id, first_name, last_name, email 
     FROM users 
     WHERE email = $1 AND password = $2`,
        [email, password]
    );

    if (result.rows.length === 0) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json(result.rows[0]); // 🔥 คืน user
}