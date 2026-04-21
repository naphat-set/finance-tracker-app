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
        COALESCE(SUM(CASE WHEN type = 'income' THEN amount END), 0) AS total_income,
        COALESCE(SUM(CASE WHEN type = 'expense' THEN amount END), 0) AS total_expense
      FROM transactions
      WHERE user_id = $1
      `,
            [userId]
        );

        return NextResponse.json(result.rows[0]);
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to fetch summary" },
            { status: 500 }
        );
    }
}