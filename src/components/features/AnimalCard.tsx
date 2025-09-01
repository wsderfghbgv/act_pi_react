'use client';

import { Animal } from "@/types/animal";

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Usar un placeholder más confiable
    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3E🐕 Perro%3C/text%3E%3C/svg%3E";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
        {animal.isAdopted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
            Adoptado
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-2">{animal.breed}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">
            {animal.age} {animal.age === 1 ? 'año' : 'años'}
          </span>
          <span className="text-sm text-gray-500 capitalize">
            {animal.gender === 'male' ? 'Macho' : 'Hembra'}
          </span>
        </div>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
          {animal.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {animal.temperament.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{animal.location}</span>
          {!animal.isAdopted && (
            <a
              href={`/adopcion/${animal.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Adoptar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
