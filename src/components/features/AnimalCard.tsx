'use client';

import { Animal } from "@/types/animal";

interface AnimalCardProps {
  animal: Animal;
  onAdoptClick?: (animal: Animal) => void;
}

export default function AnimalCard({ animal, onAdoptClick }: AnimalCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    
    // Crear placeholder específico para cada raza
    const breedPlaceholders: { [key: string]: string } = {
      // Perros
      'Golden Retriever': '🐕‍🦺',
      'Labrador': '🐕',
      'Poodle': '🐩',
      'Bulldog': '🐶',
      'Chihuahua': '🐕',
      'Pastor Alemán': '🐕‍🦺',
      // Gatos
      'Persa': '🐱',
      'Siamés': '🐈',
      'Maine Coon': '🐈‍⬛',
      'British Shorthair': '🐱',
      'Mestizo': '🐈',
      'Ragdoll': '🐈‍⬛'
    };

    const emoji = breedPlaceholders[animal.breed] || (animal.type === 'dog' ? '🐕' : '🐱');
    const animalType = animal.type === 'dog' ? 'Perro' : 'Gato';
    const breedName = animal.breed;
    
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg)'/%3E%3Ccircle cx='200' cy='120' r='50' fill='%23d1d5db'/%3E%3Cpath d='M150 200 Q200 150 250 200 L250 250 L150 250 Z' fill='%23d1d5db'/%3E%3Ctext x='50%25' y='280' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' fill='%236b7280'%3E${emoji} ${breedName}%3C/text%3E%3C/svg%3E`;
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

  const getTypeEmoji = (type: string) => {
    return type === 'dog' ? '🐕' : '🐱';
  };

  const getTypeColor = (type: string) => {
    return type === 'dog' ? 'bg-blue-500' : 'bg-purple-500';
  };

  // Función para obtener un color de fondo basado en la raza
  const getBreedColor = (breed: string, type: string) => {
    const breedColors: { [key: string]: string } = {
      // Perros
      'Golden Retriever': 'from-yellow-400 to-orange-500',
      'Labrador': 'from-black to-gray-700',
      'Poodle': 'from-white to-gray-200',
      'Bulldog': 'from-brown-400 to-brown-600',
      'Chihuahua': 'from-yellow-300 to-brown-400',
      'Pastor Alemán': 'from-gray-600 to-black',
      // Gatos
      'Persa': 'from-gray-300 to-gray-500',
      'Siamés': 'from-cream-200 to-brown-300',
      'Maine Coon': 'from-gray-700 to-black',
      'British Shorthair': 'from-blue-200 to-blue-400',
      'Mestizo': 'from-orange-300 to-white',
      'Ragdoll': 'from-white to-brown-200'
    };
    
    return breedColors[breed] || (type === 'dog' ? 'from-blue-400 to-blue-600' : 'from-purple-400 to-purple-600');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={animal.image}
          alt={`${animal.name} - ${animal.breed}`}
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
        <div className={`absolute bottom-2 right-2 ${getTypeColor(animal.type)} text-white px-2 py-1 rounded text-xs font-semibold`}>
          {getTypeEmoji(animal.type)} {animal.type === 'dog' ? 'Perro' : 'Gato'}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {animal.age} {animal.age === 1 ? 'año' : 'años'}
          </span>
        </div>
        
        <div className="mb-3">
          <p className="text-gray-600 font-medium">{animal.breed}</p>
          <p className="text-sm text-gray-500">{animal.color}</p>
        </div>
        
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
            <button 
              onClick={() => onAdoptClick?.(animal)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Adoptar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}