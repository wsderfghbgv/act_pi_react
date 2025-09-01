'use client';

import { useState } from 'react';
import Link from 'next/link';
// Se eliminó la importación de Navbar porque el archivo no es un módulo válido

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">��</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Adopta un Amigo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link href="/adopcion" className="text-gray-600 hover:text-blue-600 transition-colors">
              Adoptar
            </Link>
            <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/adopcion" className="text-gray-600 hover:text-blue-600 transition-colors">
                Adoptar
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}