import { NextResponse } from "next/server";
import { getTodos } from "@/lib/todos"; // Pastikan path import ini sesuai

// Handler untuk method GET /api/todos
export async function GET() {
    try {
        const todos = await getTodos();

        return NextResponse.json({
            success: true,
            message: "Data berhasil diambil.",
            data: todos,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Gagal mengambil data." },
            { status: 500 },
        );
    }
}
