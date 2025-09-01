export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Encuentra tu compañero perfecto
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Miles de perros esperan encontrar un hogar amoroso. 
          Adopta y cambia una vida para siempre.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/adopcion"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Perros Disponibles
          </a>
          <a
            href="/contacto"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white opacity-10 rounded-full"></div>
    </section>
  );
}
