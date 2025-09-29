import animalsData from "@/data/animals.json";

export default function Statistics() {
  // Calcular estadísticas reales
  const totalAnimals = animalsData.length;
  const adoptedAnimals = animalsData.filter(animal => animal.isAdopted).length;
  const availableAnimals = totalAnimals - adoptedAnimals;
  const dogCount = animalsData.filter(animal => animal.type === 'dog').length;
  const catCount = animalsData.filter(animal => animal.type === 'cat').length;
  const locations = [...new Set(animalsData.map(animal => animal.location))];

  const stats = [
    {
      number: `${adoptedAnimals}+`,
      label: "Animales Adoptados",
      description: "Familias felices"
    },
    {
      number: `${availableAnimals}`,
      label: "Animales Disponibles",
      description: "Esperando hogar"
    },
    {
      number: `${dogCount}`,
      label: "Perros",
      description: "🐕 Disponibles"
    },
    {
      number: `${catCount}`,
      label: "Gatos",
      description: "🐱 Disponibles"
    },
    {
      number: `${locations.length}`,
      label: "Ciudades",
      description: locations.join(", ")
    },
    {
      number: "100%",
      label: "Amor",
      description: "Sin costo adicional"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestro Impacto
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}