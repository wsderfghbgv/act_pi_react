'use client';

import { useState } from 'react';
import { Animal } from '@/types/animal';

interface AdoptionModalProps {
  animal: Animal | null;
  isOpen: boolean;
  onClose: () => void;
  onAdopt: (adoptionData: AdoptionFormData) => void;
}

export interface AdoptionFormData {
  adopterName: string;
  adopterEmail: string;
  adopterPhone: string;
  adopterAddress: string;
  adopterCity: string;
  experienceWithPets: string;
  hasOtherPets: boolean;
  otherPetsDescription: string;
  livingSpace: string;
  adoptionReason: string;
  animalId: string;
  animalName: string;
}

export default function AdoptionModal({ animal, isOpen, onClose, onAdopt }: AdoptionModalProps) {
  const [formData, setFormData] = useState<AdoptionFormData>({
    adopterName: '',
    adopterEmail: '',
    adopterPhone: '',
    adopterAddress: '',
    adopterCity: '',
    experienceWithPets: '',
    hasOtherPets: false,
    otherPetsDescription: '',
    livingSpace: '',
    adoptionReason: '',
    animalId: animal?.id || '',
    animalName: animal?.name || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));

    onAdopt(formData);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen || !animal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Adoptar a {animal.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Animal Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{animal.name}</h3>
                <p className="text-gray-600">{animal.breed} • {animal.age} {animal.age === 1 ? 'año' : 'años'}</p>
                <p className="text-gray-600">{animal.gender === 'male' ? 'Macho' : 'Hembra'} • {animal.size === 'small' ? 'Pequeño' : animal.size === 'medium' ? 'Mediano' : 'Grande'}</p>
                {animal.adoptionFee && (
                  <p className="text-green-600 font-semibold">
                    Costo de adopción: ${animal.adoptionFee.toLocaleString('es-CO')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="adopterName"
                  value={formData.adopterName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="adopterEmail"
                  value={formData.adopterEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="adopterPhone"
                  value={formData.adopterPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ciudad *
                </label>
                <select
                  name="adopterCity"
                  value={formData.adopterCity}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecciona tu ciudad</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dirección *
              </label>
              <input
                type="text"
                name="adopterAddress"
                value={formData.adopterAddress}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu dirección completa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experiencia con mascotas *
              </label>
              <select
                name="experienceWithPets"
                value={formData.experienceWithPets}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona tu experiencia</option>
                <option value="Ninguna">Ninguna experiencia</option>
                <option value="Poca">Poca experiencia</option>
                <option value="Moderada">Experiencia moderada</option>
                <option value="Mucha">Mucha experiencia</option>
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="hasOtherPets"
                  checked={formData.hasOtherPets}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">
                  ¿Tienes otras mascotas?
                </span>
              </label>
            </div>

            {formData.hasOtherPets && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Describe tus otras mascotas
                </label>
                <textarea
                  name="otherPetsDescription"
                  value={formData.otherPetsDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ej: Tengo un gato de 2 años llamado Max..."
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de vivienda *
              </label>
              <select
                name="livingSpace"
                value={formData.livingSpace}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona tu tipo de vivienda</option>
                <option value="Casa con patio">Casa con patio</option>
                <option value="Casa sin patio">Casa sin patio</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Finca">Finca</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ¿Por qué quieres adoptar a {animal.name}? *
              </label>
              <textarea
                name="adoptionReason"
                value={formData.adoptionReason}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Cuéntanos por qué {animal.name} sería perfecto para tu familia..."
              />
            </div>

            {/* Terms */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Términos y Condiciones</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Te comprometes a cuidar y amar a {animal.name} por el resto de su vida</li>
                <li>• Debes proporcionar atención veterinaria regular</li>
                <li>• No puedes vender o regalar al animal</li>
                <li>• Permitirás visitas de seguimiento si es necesario</li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Procesando...' : `Adoptar a ${animal.name}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
