import { NextResponse } from "next/server";

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
        console.log("Mensagem recebida!", {
            nome,
            email,
            celular,
            mensagem,
        });

        return NextResponse.json(
            { success: true, message: "Mensagem recebida com sucesso!" },
            { status: 200 }        
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Erro ao processar requisição" },
            { status: 500 }
        );
    }
}