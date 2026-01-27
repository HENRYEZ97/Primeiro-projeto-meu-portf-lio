import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nome, email, celular, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios!" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfólio Octávio Henrique" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nova mensagem do portfólio",
      html: `
        <h2>Nova mensagem recebida</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem!" },
      { status: 500 }
    );
  }
}
