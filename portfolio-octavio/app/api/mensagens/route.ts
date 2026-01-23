import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { nome, email, celular, mensagem } = body;

        if (!nome || !email || !mensagem) {
            return NextResponse.json(
                { error: "Campos obrigatórios!" },
                { status: 400 }
            );
        }
       
        await db.execute(
            "INSERT INTO mensagens(nome, email, celular, mensagem) VALUES (?, ?, ?, ?)",
            [nome, email, celular, mensagem]
        );

        return NextResponse.json(
            { success: true, message: "Mensagem recebida com sucesso!" },
            { status: 201 }        
        );
    } catch (error) {
        console.error(error);
        
        return NextResponse.json(
            { error: "Erro ao processar requisição!"},
            { status: 500 }
        );
    }
}