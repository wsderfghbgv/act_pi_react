# Adopta un Amigo - Plataforma de Adopción de Perros

## Descripción
Plataforma web para facilitar la adopción de perros en Colombia. Conectamos perros sin hogar con familias amorosas que buscan un compañero peludo.

## Características
- 🏠 Página principal con perros destacados
- 🐕 Catálogo completo de perros disponibles
- 📝 Formulario de adopción interactivo
- 📊 Estadísticas de adopciones
- 📱 Diseño responsive
- 🎨 Interfaz moderna y amigable

## Tecnologías Utilizadas
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recomendado)

## Estructura del Proyecto
```
src/
├── app/                    # Páginas de Next.js
│   ├── page.tsx           # Página principal
│   ├── adopcion/          # Página de adopción
│   ├── contacto/          # Página de contacto
│   └── layout.tsx         # Layout principal
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   └── features/         # Componentes de funcionalidad
├── types/                # Tipos TypeScript
├── data/                 # Datos estáticos
└── lib/                  # Utilidades
```

## Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd act_pi_react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Scripts disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código

## Distribución de Tareas

### Integrante 1 (Líder)
- ✅ Estructura base del proyecto
- ✅ Tipos TypeScript
- ✅ Layout principal y navegación
- ✅ Página principal
- 🔄 Coordinación del proyecto

### Integrante 2
- ⏳ Componente Hero
- ⏳ Componente AnimalCard
- ⏳ Componente Statistics
- ⏳ Página de adopción

### Integrante 3
- ⏳ Formulario de adopción
- ⏳ Página de contacto
- ⏳ Footer mejorado

## Convenciones de Código

### Commits
- Usar mensajes descriptivos en español
- Formato: `feat: agregar componente Hero`
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

### Nomenclatura
- Componentes: PascalCase (ej: `AnimalCard`)
- Archivos: kebab-case (ej: `animal-card.tsx`)
- Variables: camelCase (ej: `animalData`)

### Estructura de Componentes
```typescript
// Imports
import { useState } from 'react';

// Types
interface Props {
  // definir props
}

// Component
export default function ComponentName({ prop }: Props) {
  // lógica del componente
  return (
    // JSX
  );
}
```

## Registro de Avances por Clase
**Nota**: Todos los avances documentados en esta sección deben coincidir con los commits realizados en el repositorio, incluyendo el autor correspondiente de cada commit. Cada tarea completada, en progreso o pendiente debe estar respaldada por un commit asociado en el repositorio, con mensajes descriptivos que reflejen la tarea realizada y el nombre del autor.

### Clase 1
- **Fecha**: [DD/MM/YYYY]
- **Objetivos**:
  - ✅ Configurar estructura de carpetas
  - ✅ Definir tipos TypeScript
  - ✅ Crear layout base
  - ✅ Implementar navegación
- **Avances**:
  - ✅ Estructura base del proyecto - Responsable: [Tu nombre] - Commit: [Hash o descripción del commit]
  - ✅ Tipos TypeScript definidos - Responsable: [Tu nombre] - Commit: [Hash o descripción del commit]
  - ✅ Layout principal implementado - Responsable: [Tu nombre] - Commit: [Hash o descripción del commit]
- **En progreso**:
  - 🔄 Componentes de features - Responsable: [Integrante 2] - Commit: [Hash o descripción del commit]
- **Pendiente**:
  - ⏳ Formulario de adopción - Responsable: [Integrante 3]
  - ⏳ Página de contacto - Responsable: [Integrante 3]
- **Notas**:
  - Proyecto configurado con Next.js 15 y TypeScript
  - Estructura de carpetas organizada según mejores prácticas

### Clase 2
- **Fecha**: [DD/MM/YYYY]
- **Objetivos**:
  - [Objetivo 1]
  - [Objetivo 2]
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
  - ✅ [Tarea completada 2] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
- **En progreso**:
  - 🔄 [Tarea en progreso] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]

### Clase [N]
- **Fecha**: [DD/MM/YYYY]
- [Repetir estructura anterior]

## Contacto
### Información del Grupo
- **Institución**: SENA
- **Programa**: Análisis y Desarrollo de Software
- **Ficha**: [Número de ficha]
- **Instructor**: [Nombre del instructor]
- **Período**: [Año - Trimestre]

### Integrantes
1. **[Tu nombre]** - Líder del proyecto
2. **[Integrante 2]** - Frontend Developer
3. **[Integrante 3]** - Frontend Developer