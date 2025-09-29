export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Encuentra tu compañero perfecto
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Adopta un amigo fiel y cambia su vida para siempre.
        </p>
        <a
          href="/adopcion"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Ver animales en adopción
        </a>
      </div>
    </section>
  );
}
