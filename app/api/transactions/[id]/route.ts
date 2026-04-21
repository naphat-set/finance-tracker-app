import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// PUT
export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params; // 🔥 ต้อง await

        console.log("PUT ID:", id);

        const body = await req.json();
        const { category_id, amount, type, note, date } = body;

        const result = await query(
            `UPDATE transactions
             SET category_id = $1,
                 amount = $2,
                 type = $3,
                 note = $4,
                 date = $5
             WHERE id = $6
             RETURNING *`,
            [category_id, amount, type, note, date, id]
        );

        console.log("ROW COUNT:", result.rowCount);

        return NextResponse.json({
            success: true,
            data: result.rows[0],
        });
    } catch (err) {
        console.log("PUT ERROR:", err);
        return NextResponse.json({ error: "Update failed" });
    }
}

// DELETE
export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const userId = req.headers.get("userid");

        console.log("DELETE ID:", id);
        console.log("USER ID:", userId);

        const result = await query(
            `DELETE FROM transactions WHERE id = $1 AND user_id = $2`,
            [Number(id), Number(userId)]
            
        );

        console.log("ROW COUNT:", result.rowCount);

        return NextResponse.json({
            success: true,
            deleted: result.rowCount,
        });
    } catch (err) {
        console.log("DELETE ERROR:", err);
        return NextResponse.json({ error: "Delete failed" });
    }
}