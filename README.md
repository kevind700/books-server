# API Project with TypeScript and JSON Server

Este proyecto es una API REST construida con Node.js, TypeScript y JSON Server.

## 🚀 Características

- TypeScript para tipado estático
- JSON Server como mock API
- Express.js para el servidor
- Manejo de usuarios y libros

## 📋 Prerrequisitos

- Node.js (versión 16.x o superior)
- npm (incluido con Node.js)

## 🔧 Instalación

1. Clona el repositorio:
```bash
https://github.com/kevind700/books-server.git
cd books-server
```

2. Instala las dependencias:
```bash
npm install
```

## ⚡ Iniciar el proyecto

Para ejecutar el proyecto necesitas iniciar tanto el servidor principal como json-server.

1. Inicia json-server (en una terminal):
```bash
npm run json-server
```

2. Inicia el servidor de desarrollo (en otra terminal):
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 🛣️ Endpoints

### Usuarios
- GET `/api/users` - Obtener todos los usuarios
- GET `/api/users/:id` - Obtener usuario por ID

### Libros
- GET `/api/books` - Obtener todos los libros
- GET `/api/books/:id` - Obtener libro por ID

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor en modo desarrollo
npm run json-server  # Inicia json-server

# Producción
npm run build        # Compila el proyecto
npm start           # Inicia el servidor en modo producción
```
