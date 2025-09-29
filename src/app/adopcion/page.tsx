'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimalCard from "@/components/features/AnimalCard";
import AdoptionModal, { AdoptionFormData } from "@/components/features/AdoptionModal";
import animalsData from "@/data/animals.json";
import { Animal, AnimalFilters } from "@/types/animal";

export default function AdopcionPage() {
  // Convertir los datos del JSON al tipo Animal correctamente
  const allAnimals = animalsData.map((animal: any) => ({
      ...animal,
    type: animal.type as 'dog' | 'cat',
      gender: animal.gender as 'male' | 'female',
      size: animal.size as 'small' | 'medium' | 'large',
      createdAt: new Date(animal.createdAt),
  }));

  // Estados para los filtros
  const [filters, setFilters] = useState<AnimalFilters>({
    type: undefined,
    breed: '',
    age: undefined,
    gender: undefined,
    size: undefined,
    location: ''
  });

  // Obtener valores únicos para los filtros
  const breeds = useMemo(() => {
    const filteredAnimals = filters.type 
      ? allAnimals.filter(animal => animal.type === filters.type)
      : allAnimals;
    const uniqueBreeds = [...new Set(filteredAnimals.map(animal => animal.breed))];
    return uniqueBreeds.sort();
  }, [allAnimals, filters.type]);

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(allAnimals.map(animal => animal.location))];
    return uniqueLocations.sort();
  }, [allAnimals]);

  // Filtrar animales
  const filteredAnimals = useMemo(() => {
    return allAnimals.filter((animal: Animal) => {
      if (animal.isAdopted) return false;
      
      if (filters.type && animal.type !== filters.type) return false;
      if (filters.breed && animal.breed !== filters.breed) return false;
      if (filters.age && animal.age !== filters.age) return false;
      if (filters.gender && animal.gender !== filters.gender) return false;
      if (filters.size && animal.size !== filters.size) return false;
      if (filters.location && animal.location !== filters.location) return false;
      
      return true;
    });
  }, [allAnimals, filters]);

  // Función para limpiar filtros
  const clearFilters = () => {
    setFilters({
      type: undefined,
      breed: '',
      age: undefined,
      gender: undefined,
      size: undefined,
      location: ''
    });
  };

  // Contar animales por tipo
  const dogCount = filteredAnimals.filter(animal => animal.type === 'dog').length;
  const catCount = filteredAnimals.filter(animal => animal.type === 'cat').length;

  // Estado para el modal de adopción
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const router = useRouter();

  const handleAdoptClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleAdoptSubmit = (data: AdoptionFormData) => {
    // Aquí podrías enviar datos a una API. Por ahora redirigimos a la página de éxito
    const params = new URLSearchParams({
      animalName: data.animalName || selectedAnimal?.name || '',
      adopterName: data.adopterName || ''
    });
    router.push(`/adopcion/exito?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🐕🐱 Animales Disponibles para Adopción
        </h1>
        
        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">🔍 Filtrar por:</h2>
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Filtro por tipo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Animal
              </label>
              <select
                value={filters.type || ''}
                onChange={(e) => setFilters({...filters, type: e.target.value as 'dog' | 'cat' | undefined, breed: ''})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todos</option>
                <option value="dog">🐕 Perros</option>
                <option value="cat">🐱 Gatos</option>
              </select>
            </div>

            {/* Filtro por raza */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Raza
              </label>
              <select
                value={filters.breed || ''}
                onChange={(e) => setFilters({...filters, breed: e.target.value || undefined})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={!filters.type}
              >
                <option value="">Todas las razas</option>
                {breeds.map(breed => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </div>

            {/* Filtro por edad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Edad
              </label>
              <select
                value={filters.age || ''}
                onChange={(e) => setFilters({...filters, age: e.target.value ? parseInt(e.target.value) : undefined})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier edad</option>
                <option value="1">1 año</option>
                <option value="2">2 años</option>
                <option value="3">3 años</option>
                <option value="4">4 años</option>
                <option value="5">5 años</option>
              </select>
            </div>

            {/* Filtro por género */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Género
              </label>
              <select
                value={filters.gender || ''}
                onChange={(e) => setFilters({...filters, gender: e.target.value as 'male' | 'female' | undefined})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier género</option>
                <option value="male">Macho</option>
                <option value="female">Hembra</option>
              </select>
            </div>

            {/* Filtro por tamaño */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tamaño
              </label>
              <select
                value={filters.size || ''}
                onChange={(e) => setFilters({...filters, size: e.target.value as 'small' | 'medium' | 'large' | undefined})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Cualquier tamaño</option>
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </select>
            </div>

            {/* Filtro por ubicación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ubicación
              </label>
              <select
                value={filters.location || ''}
                onChange={(e) => setFilters({...filters, location: e.target.value || undefined})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todas las ubicaciones</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredAnimals.length}</div>
                <div className="text-sm text-gray-600">Total disponible{filteredAnimals.length !== 1 ? 's' : ''}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{dogCount}</div>
                <div className="text-sm text-gray-600">🐕 Perros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{catCount}</div>
                <div className="text-sm text-gray-600">🐱 Gatos</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {filters.type && `Filtrando por: ${filters.type === 'dog' ? 'Perros' : 'Gatos'}`}
            </div>
          </div>
        </div>
        
        {/* Lista de animales */}
        {filteredAnimals.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-6xl mb-4">🐕🐱</div>
            <p className="text-xl text-gray-600 mb-2">
              No se encontraron animales con los filtros seleccionados
            </p>
            <p className="text-gray-500">
              Intenta ajustar los filtros o{' '}
              <button 
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                limpiar todos los filtros
              </button>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnimals.map((animal: Animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onAdoptClick={handleAdoptClick}
              />
            ))}
          </div>
        )}
      </div>
      <AdoptionModal
        animal={selectedAnimal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdopt={handleAdoptSubmit}
      />
    </div>
  );
}
