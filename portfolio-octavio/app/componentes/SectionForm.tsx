"use client";
import { useState } from "react";
import BackgroundGlow from "./BackgroundGlow";

export default function SectionForm () {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.nome || !formData.email || !formData.mensagem) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  try {

    const response = await fetch("/api/mensagens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Erro ao enviar mensagem");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    setFormData({
      nome: "",
      email: "",
      celular: "",
      mensagem: "",
    });
  } catch (error) {
    alert("Erro de conexão com o servidor");
  }
};


 return (
    <section
        id="contato"
        className="relative py-20 px-6 text-center bg-gradient-to-b from-black to-neutral-900">
        <BackgroundGlow variant="blue" />

        <h2 className="text-3xl font-bold text-white">
          FALE <span className="text-blue-700">COMIGO.</span>
        </h2>

        <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
          Tem uma ideia, projeto ou oportunidade? Me chama e vamos conversar.
        </p>

      <form
        onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-10 flex flex-col gap-4 bg-white/5 backdrop-blur border border-white/10 text-white p-4 rounded-xl">
            <input
              type="text"
              name="nome"
              placeholder="Nome:"
              required
              value={formData.nome}
              onChange={handleChange}
              className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition"/>

            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail:"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition"/>

            <input
              type="text"
              name="celular"
              placeholder="Celular:"
              value={formData.celular}
              onChange={handleChange}
              className="bg-neutral-900 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/40 transition"/>

            <textarea
              name="mensagem"
              placeholder="Sua mensagem:"
              required
              value={formData.mensagem}
              onChange={handleChange}
              className="bg-neutral-900 text-white p-4 rounded-lg h-28 outline-none focus:ring-2 focus:ring-blue-600/40 transition"/>

            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/30 transition cursor-pointer">
              Enviar
            </button>
      </form>
    </section>
  );
}