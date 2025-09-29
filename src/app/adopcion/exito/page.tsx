'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AdoptionSuccessPage() {
  const searchParams = useSearchParams();
  const animalName = searchParams.get('animalName') || 'tu nueva mascota';
  const adopterName = searchParams.get('adopterName') || '';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Felicidades! 🎉
        </h1>
        
        <p className="text-xl text-gray-600 mb-6">
          {adopterName && `¡${adopterName}, `}has adoptado exitosamente a <span className="font-semibold text-blue-600">{animalName}</span>
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-3">
            Próximos pasos:
          </h2>
          <div className="text-left space-y-2 text-green-700">
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">1.</span>
              <span>Recibirás un email de confirmación en las próximas 24 horas</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">2.</span>
              <span>Nos pondremos en contacto contigo para coordinar la entrega</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">3.</span>
              <span>Prepara tu hogar para recibir a tu nueva mascota</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">4.</span>
              <span>Programa una cita veterinaria para el chequeo inicial</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            ¿Tienes preguntas?
          </h3>
          <p className="text-blue-700 mb-2">
            Puedes contactarnos en cualquier momento:
          </p>
          <div className="space-y-1 text-blue-600">
            <p>📧 Email: adopciones@mascotas.com</p>
            <p>📞 Teléfono: +57 1 234 5678</p>
            <p>💬 WhatsApp: +57 300 123 4567</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/adopcion"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver más mascotas
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Gracias por darle una segunda oportunidad a {animalName}. 
            <br />
            ¡Estamos seguros de que será muy feliz en su nuevo hogar! 🏠❤️
          </p>
        </div>
      </div>
    </div>
  );
}
