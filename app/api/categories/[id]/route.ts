import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ id: string }> } // 🔥 ตรงนี้ก็ต้องแก้
) {
    try {
        const { id } = await context.params; // 🔥 FIX
        const categoryId = Number(id);

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
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
      `,
            [name, categoryId]
        );

        if (result.rowCount === 0) {
            return NextResponse.json(
                { error: "Category not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0]);
    } catch (err) {
        console.log("🔥 UPDATE ERROR:", err);
        return NextResponse.json(
            { error: "Failed to update category" },
            { status: 500 }
        );
    }
}