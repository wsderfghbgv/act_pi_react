'use client';

import { Animal } from "@/types/animal";

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Usar un placeholder más atractivo
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ccircle cx='200' cy='120' r='40' fill='%23d1d5db'/%3E%3Cpath d='M160 200 Q200 160 240 200 L240 250 L160 250 Z' fill='%23d1d5db'/%3E%3Ctext x='50%25' y='280' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E🐕%3C/text%3E%3C/svg%3E";
  };

  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'small': return 'Pequeño';
      case 'medium': return 'Mediano';
      case 'large': return 'Grande';
      default: return size;
    }
  };

  const getGenderLabel = (gender: string) => {
    return gender === 'male' ? 'Macho' : 'Hembra';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
        {animal.isAdopted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ✅ Adoptado
          </div>
        )}
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
          {getSizeLabel(animal.size)}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {animal.age} {animal.age === 1 ? 'año' : 'años'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3 font-medium">{animal.breed}</p>
        
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="text-gray-500">
            {getGenderLabel(animal.gender)}
          </span>
          <span className="text-gray-500">
            📍 {animal.location}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
          {animal.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {animal.temperament.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
            >
              {trait}
            </span>
          ))}
          {animal.temperament.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{animal.temperament.length - 3}
            </span>
          )}
        </div>

        {/* Información de salud */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <div className="flex space-x-2">
            {animal.healthInfo.vaccinated && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">💉 Vacunado</span>
            )}
            {animal.healthInfo.sterilized && (
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">✂️ Esterilizado</span>
            )}
            {animal.healthInfo.microchipped && (
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">🔍 Microchip</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          {animal.adoptionFee && (
            <div className="text-sm">
              <span className="text-gray-500">Costo de adopción:</span>
              <span className="font-semibold text-green-600 ml-1">
                ${animal.adoptionFee.toLocaleString('es-CO')}
              </span>
            </div>
          )}
          {!animal.isAdopted && (
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Adoptar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}