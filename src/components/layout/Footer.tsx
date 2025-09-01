import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adopta un Amigo</h3>
            <p className="text-gray-300">
              Ayudamos a perros sin hogar a encontrar familias amorosas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/adopcion" className="text-gray-300 hover:text-white transition-colors">
                  Adoptar
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300">
              Email: info@adoptaunamigo.com<br />
              Teléfono: +57 300 123 4567<br />
              Dirección: Bogotá, Colombia
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Adopta un Amigo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}