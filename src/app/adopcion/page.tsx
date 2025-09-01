import AnimalCard from "@/components/features/AnimalCard";
import animalsData from "@/data/animals.json";
import { Animal } from "@/types/animal";

export default function AdopcionPage() {
  // Convertir los datos del JSON al tipo Animal correctamente
  const availableAnimals = animalsData
    .map((animal: any) => ({
      ...animal,
      gender: animal.gender as 'male' | 'female',
      size: animal.size as 'small' | 'medium' | 'large',
      createdAt: new Date(animal.createdAt),
    }))
    .filter((animal: Animal) => !animal.isAdopted);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Perros Disponibles para Adopción
        </h1>
        
        {availableAnimals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              ¡Excelente! Todos los perros han encontrado hogar.
            </p>
            <p className="text-gray-500 mt-2">
              Vuelve pronto para ver nuevos perros disponibles.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableAnimals.map((animal: Animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
