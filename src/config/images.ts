// Configuración de imágenes para cada raza
export const breedImages: { [key: string]: string } = {
  // Perros
  'Golden Retriever': '/images/golden.jpg',
  'Labrador': '/images/labrador.jpg', 
  'Poodle': '/images/poodle.jpg',
  'Bulldog': '/images/Bulldog.jpg',
  'Chihuahua': '/images/Chihuahua.jpg',
  'Pastor Alemán': '/images/Pastor Alemán.jpg',
  
  // Gatos
  'Persa': '/images/persa.jpg',
  'Siamés': '/images/siames.jpg',
  'Maine Coon': '/images/maine.jpg',
  'British Shorthair': '/images/British.jpg',
  'Mestizo': '/images/Mestizo.jpg',
  'Ragdoll': '/images/Ragdoll.jpg'
};

// Función para obtener la imagen de una raza específica
export const getBreedImage = (breed: string): string => {
  return breedImages[breed] || '/images/descarga.jpeg';
};

// Función para obtener un placeholder específico para cada raza
export const getBreedPlaceholder = (breed: string, type: 'dog' | 'cat'): string => {
  const breedEmojis: { [key: string]: string } = {
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

  const emoji = breedEmojis[breed] || (type === 'dog' ? '🐕' : '🐱');
  
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f3f4f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bg)'/%3E%3Ccircle cx='200' cy='120' r='50' fill='%23d1d5db'/%3E%3Cpath d='M150 200 Q200 150 250 200 L250 250 L150 250 Z' fill='%23d1d5db'/%3E%3Ctext x='50%25' y='280' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' fill='%236b7280'%3E${emoji} ${breed}%3C/text%3E%3C/svg%3E`;
};
