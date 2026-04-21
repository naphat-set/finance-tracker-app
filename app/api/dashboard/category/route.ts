import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("userid");

        if (!userId) {
            return NextResponse.json(
                { error: "Missing userId" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `
      SELECT 
        c.name,
        COALESCE(SUM(CASE WHEN t.type = 'income' THEN t.amount END), 0) AS income,
        COALESCE(SUM(CASE WHEN t.type = 'expense' THEN t.amount END), 0) AS expense
      FROM categories c
      LEFT JOIN transactions t 
        ON t.category_id = c.id AND t.user_id = $1
      GROUP BY c.name
      ORDER BY c.name
      `,
            [userId]
        );

        return NextResponse.json(result.rows);
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to fetch category summary" },
            { status: 500 }
        );
    }
}