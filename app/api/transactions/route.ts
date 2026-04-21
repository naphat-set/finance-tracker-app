import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("userid");

        if (!userId) {
            return NextResponse.json({ data: [] });
        }

        const data = await query(
            `SELECT t.*, c.name as category_name
             FROM transactions t
             LEFT JOIN categories c ON t.category_id = c.id
             WHERE t.user_id = $1
             ORDER BY t.date DESC`,
            [userId]
        );

        return NextResponse.json({ data: data.rows });
    } catch (err) {
        console.log("GET ERROR:", err);
        return NextResponse.json({ data: [] });
    }
}

// POST
export async function POST(req: NextRequest) {
    try {
        const userId = req.headers.get("userid");

        const body = await req.json();
        const { category_id, amount, type, note, date } = body;

        const result = await query(
            `INSERT INTO transactions 
            (user_id, category_id, amount, type, note, date)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [userId || 1, category_id, amount, type, note, date]
        );

        return NextResponse.json({
            success: true,
            data: result.rows[0],
        });
    } catch (err) {
        console.log("POST ERROR:", err);
        return NextResponse.json({ error: "Create failed" });
    }
}