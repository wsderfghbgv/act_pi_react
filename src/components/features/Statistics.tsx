export default function Statistics() {
  const stats = [
    {
      number: "500+",
      label: "Perros Adoptados",
      description: "Familias felices"
    },
    {
      number: "50+",
      label: "Perros Disponibles",
      description: "Esperando hogar"
    },
    {
      number: "3",
      label: "Ciudades",
      description: "Bogotá, Medellín, Cali"
    },
    {
      number: "100%",
      label: "Gratis",
      description: "Solo amor"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestro Impacto
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
