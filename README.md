# 📋 Mi Lista de Tareas - To-Do App

Una aplicación moderna y responsiva de lista de tareas construida con **React** y **Vite**. Con una interfaz atractiva, paleta de colores vibrante y funcionalidades completas para gestionar tus tareas diarias.

## 🎨 Características

✨ **Agregar tareas** - Crea nuevas tareas fácilmente  
✅ **Marcar como completadas** - Usa checkboxes para registrar progreso  
🗑️ **Eliminar tareas** - Borra tareas que ya no necesites  
📊 **Resumen estadístico** - Visualiza el total, completadas y pendientes  
📱 **Diseño responsivo** - Funciona perfectamente en desktop, tablet y móvil  
🎯 **Interfaz moderna** - Gradientes, animaciones suaves y sombras elegantes  
⌨️ **Soporte para Enter** - Agrega tareas presionando Enter

## 🏗️ Estructura del Proyecto

```
To-Do-App/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principales y responsivos
│   ├── ToDoList.jsx      # Componente de la lista de tareas
│   ├── main.jsx          # Punto de entrada de React
│   └── index.css         # Estilos globales
├── index.html            # Archivo HTML base
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── .eslintrc.cjs         # Configuración de ESLint
└── README.md             # Este archivo
```

## 📦 Archivos Incluidos

### Componentes
- **`ToDoList.jsx`** - Componente principal que maneja:
  - Clase `Tarea` para instanciar tareas
  - Estados de tareas y texto del input
  - Métodos para agregar, eliminar y marcar tareas
  - Cálculo de estadísticas

- **`App.jsx`** - Componente raíz que renderiza `ToDoList`

### Estilos
- **`App.css`** - Estilos completos incluyendo:
  - Diseño responsivo con media queries
  - Animaciones de entrada y transiciones
  - Gradientes modernos
  - Temas para todos los componentes

### Configuración
- **`vite.config.js`** - Configuración del bundler
- **`package.json`** - Dependencias y scripts de desarrollo
- **`.eslintrc.cjs`** - Reglas de linting

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de UI con Hooks (useState)
- **Vite** - Bundler rápido y moderno
- **CSS3** - Estilos avanzados (gradientes, animaciones, media queries)
- **JavaScript ES6+** - Sintaxis moderna

### Dependencias
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### DevDependencies
```json
{
  "@types/react": "^18.3.6",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "vite": "^5.4.1",
  "eslint": "^8.57.0",
  "@eslint-community/eslint-plugin-eslint-comments": "^4.4.0",
  "@typescript-eslint/parser": "^7.9.0"
}
```

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores moderna:

- **#FEE1D3** - Beige claro (fondo secundario)
- **#C0D6FF** - Azul cielo (acentos y botones)
- **#6D0101** - Rojo oscuro (títulos y textos)
- **#C18D17** - Dorado (accents secundarios)
- **#FFD5FB** - Rosa claro (fondo terciario)

## 🚀 Ejecución

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/AnaLauDB/To-Do-App.git
cd To-Do-App
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo con HMR
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview

# Ejecutar linting
npm run lint
```

## 💡 Cómo Funciona

### Agregar Tareas
1. Escribe el texto en el input
2. Presiona "Agregar Tarea" o Enter
3. La tarea aparecerá en la lista con un ID único

### Marcar como Completada
- Usa el checkbox junto a cada tarea
- El estado se actualiza automáticamente

### Eliminar Tareas
- Presiona el botón "🗑️ Eliminar"
- La tarea se eliminará de la lista

### Estadísticas
- Se actualiza automáticamente con cada cambio
- Muestra total, completadas y pendientes

## 📱 Responsividad

La aplicación se adapta a todos los dispositivos:

- **Desktop** (>768px) - Vista completa
- **Tablet** (768px - 480px) - Ajuste de espacios
- **Móvil** (<480px) - Optimizado para pantallas pequeñas

## 🔒 Validaciones

- ✅ No permite agregar tareas vacías
- ✅ IDs únicos e incrementales
- ✅ Prevención de duplicados en la interfaz

## 💫 Mejoras Futuras Sugeridas

- 🔐 **Persistencia de datos** - Guardar tareas en `localStorage`
- 🎨 **Tema oscuro** - Toggle entre temas claro/oscuro
- 🏷️ **Categorías** - Agrupar tareas por categorías
- ⭐ **Prioridades** - Marcar tareas como alta/media/baja prioridad
- 🔍 **Filtros** - Filtrar por estado (completadas/pendientes)
- 📅 **Fechas límite** - Agregar vencimiento a las tareas
- 🔔 **Notificaciones** - Alertas de tareas pendientes
- 💾 **Exportar** - Descargar tareas como PDF o JSON
- 🔐 **Autenticación** - Login y tareas sincronizadas en nube
- 🧪 **Unit Tests** - Pruebas con Jest o Vitest

## 👨‍💻 Información de Desarrollo

- **Creador**: AnaLauDB
- **Repositorio**: [To-Do-App](https://github.com/AnaLauDB/To-Do-App)
- **Rama**: main
- **Licencia**: MIT

## 📝 Notas

Este proyecto es ideal para aprender:
- Manejo de estados en React con `useState`
- Manipulación de arrays (map, filter)
- Estilos responsivos con CSS3
- Programación orientada a objetos en JavaScript

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios grandes:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Hecho con animos de aprender usando React y Vite**
