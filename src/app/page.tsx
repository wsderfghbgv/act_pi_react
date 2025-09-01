import Hero from "@/components/features/Hero";
import Statistics from "@/components/features/Statistics";
import AnimalCard from "@/components/features/AnimalCard";
import animalsData from "@/data/animals.json";
import { Animal } from "@/types/animal";

export default function HomePage() {
  // Convertir los datos del JSON al tipo Animal correctamente
  const availableAnimals = animalsData
    .map((animal: any) => ({
      ...animal,
      gender: animal.gender as 'male' | 'female',
      size: animal.size as 'small' | 'medium' | 'large',
      createdAt: new Date(animal.createdAt),
    }))
    .filter((animal: Animal) => !animal.isAdopted)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Perros Disponibles para Adopción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableAnimals.map((animal: Animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/adopcion"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Todos los Perros
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}