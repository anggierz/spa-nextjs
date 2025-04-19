# 🎬 MovieDB SPA + SSR con React y Next.js

Este proyecto es una aplicación SPA (Single Page Application) desarrollada en **React** y **Next.js** con App Router para la navegación. La aplicación permite a los usuarios explorar películas en tendencia, ver detalles individuales y navegar entre páginas sin recargar el navegador.

🔗 **Versión SSR desplegada en Vercel:**  
👉 [https://spa-nextjs-wheat.vercel.app/](https://spa-nextjs-wheat.vercel.app/)


## 📌 Descripción de la aplicación

La aplicación **MovieDB** permite:

- Consultar películas en tendencia mediante la API de TMDB.
- Visualizar tarjetas con información básica (imagen, título, sinopsis y fecha de estreno).
- Acceder a una vista detallada de cada película al hacer clic en su tarjeta.
- Navegación fluida entre páginas utilizando App Router.

Esta práctica forma parte de la asignatura **Desarrollo Front con Frameworks I** – Práctica 2 de React.

## 🗂️ Estructura del Proyecto

- Implementado con Next.js 13+ usando el sistema `app/`.
- Navegación basada en rutas de archivos y renderizado en servidor (SSR).
- Rutas:
  - `app/page.js` → Inicio
  - `app/movie/[movieId]/page.js` → Detalle de película
  - `app/search/page.js` → Búsqueda de películas

## 🚀 Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio
```bash
git clone https://github.com/anggierz/spa-nextjs.git
cd spa-nextjs
```

### 2. Instalar dependencias

```bash
npm install

```
### 3. Configurar el archivo .env con el token de TMDB

Puedes utilizar tu propio token o uno que proporcionaré aparte. Se debe configurar el token antes de ejecutar la aplicación
ya que este se utiliza para las consultas de películas.

### 4. Ejecutar la aplicación en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### 5. Ejecutar pruebas

> No se incluyen pruebas automatizadas. Puedes verificar el correcto funcionamiento de la app navegando por las rutas.

## 📁 Estructura del proyecto

```bash
spa-nextjs/
├── public/                 # Archivos estáticos
├── src/
│   ├── app/                # Sistema de rutas con App Router
│   │   ├── api/search/         # API interna para la búsqueda de peliculas en Search, para no exponer el token
│   │   │    └── route.js
│   │   ├── page.js         # Página de inicio con películas en tendencia
│   │   ├── search/page.js  # Página de búsqueda de películas (hecha con use client para evitar recargar la página)
│   │   └── movie/[movieId]/     # Ruta dinámica para detalle de películas
│   │       └── page.js
│   └── components/         # Componentes reutilizables (Header)
├── .env.example            # Variables de entorno de ejemplo
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación del proyecto
├── eslint.config.mjs       # Configuración de ESLint
├── jsconfig.json           # Alias y configuración de rutas
├── next.config.mjs         # Configuración personalizada de Next.js
├── package.json            # Dependencias y scripts del proyecto
├── package-lock.json       # Versión fija de dependencias

```

## 🛠️ Tecnologías utilizadas

- React
- Next.js con App Router