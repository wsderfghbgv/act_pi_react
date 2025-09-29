"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: { [k: string]: string } = {};
    if (!form.nombre.trim()) nextErrors.nombre = "Ingresa tu nombre";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Email inválido";
    if (!form.asunto.trim()) nextErrors.asunto = "Ingresa un asunto";
    if (form.mensaje.trim().length < 10) nextErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    if (!validate()) return;
    setSending(true);
    // Simula envío a API
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSuccess("¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>

              <div className="space-y-4 text-gray-600">
                <p>📧 info@adoptaunamigo.com</p>
                <p>📞 +57 300 123 4567</p>
                <p>📍 Calle 123 #45-67, Bogotá, Colombia</p>
                <p>🕘 Lun-Vie: 9am-6pm • Sáb: 9am-2pm</p>
              </div>
              <div className="mt-6 p-4 rounded bg-blue-50 text-blue-700 text-sm">
                ¿Tienes una urgencia? Escríbenos por WhatsApp: <span className="font-semibold">+57 300 123 4567</span>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h2>

              {success && (
                <div className="mb-4 p-3 rounded border border-green-200 bg-green-50 text-green-800 text-sm">
                  {success}
                </div>
              )}

              <form className="space-y-4" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={onChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.nombre ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={form.asunto}
                    onChange={onChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.asunto ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.asunto && <p className="mt-1 text-xs text-red-600">{errors.asunto}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={onChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.mensaje ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.mensaje && <p className="mt-1 text-xs text-red-600">{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Enviando…' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
