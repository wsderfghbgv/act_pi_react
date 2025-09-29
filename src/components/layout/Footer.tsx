"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Marca y misión */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Adopta un Amigo</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Conectamos animales rescatados con familias amorosas. Cada adopción cambia dos vidas: la suya y la tuya.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 text-xs rounded bg-green-800/40 text-green-300 border border-green-700">ONG</span>
              <span className="px-2 py-1 text-xs rounded bg-blue-800/40 text-blue-300 border border-blue-700">+100 adopciones</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/adopcion" className="hover:text-white transition-colors">Adoptar</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
              </li>
              <li>
                <Link href="/adopcion/exito?animalName=Amigo" className="hover:text-white transition-colors">Historias de éxito</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@adoptaunamigo.com</li>
              <li>📞 +57 300 123 4567</li>
              <li>📍 Bogotá, Colombia</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">📸</a>
              <a href="#" aria-label="Facebook" className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">📘</a>
              <a href="#" aria-label="WhatsApp" className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors">💬</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Recibe novedades</h4>
            <p className="text-gray-400 text-sm mb-3">Noticias, jornadas de adopción y tips de cuidado.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Suscribirme
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">Nos tomamos en serio tu privacidad.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Adopta un Amigo. Todos los derechos reservados.</p>
          <div className="mt-3 md:mt-0 flex gap-4 text-gray-500">
            <a href="#" className="hover:text-gray-300">Términos</a>
            <a href="#" className="hover:text-gray-300">Privacidad</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}