import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

// ✅ GET categories (list + count)
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
        c.id,
        c.name,
        COUNT(t.id) AS total_transactions
      FROM categories c
      LEFT JOIN transactions t 
        ON t.category_id = c.id AND t.user_id = $1
      GROUP BY c.id
      ORDER BY c.id
      `,
            [userId]
        );

        return NextResponse.json(result.rows);
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        );
    }
}

// ✅ POST create category
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json(
                { error: "Name is required" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `
      INSERT INTO categories (name)
      VALUES ($1)
      RETURNING *
      `,
            [name]
        );

        return NextResponse.json(result.rows[0]);
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to create category" },
            { status: 500 }
        );
    }
}