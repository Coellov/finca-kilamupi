# Finca Kilamupi — SPA

Aplicación web (Single Page Application) desarrollada con **Next.js 14 (App Router) + React + Tailwind CSS** para la Finca Agroecológica Kilamupi. Integra catálogo de productos de origen, reserva de experiencias de agroturismo y storytelling de la cultura Upano.

Proyecto desarrollado como **Trabajo Fin de Máster** — Máster Universitario en Diseño y Desarrollo de Interfaz de Usuario Web (Front-End), UNIR.

## Stack técnico

- **Next.js 14** con App Router y generación de sitios estáticos (SSG).
- **React 18** con arquitectura basada en componentes.
- **Tailwind CSS** para el sistema de diseño (paleta y tipografía definidas en `tailwind.config.js`).
- **next/font** para carga optimizada de tipografías (Fraunces + Inter).
- **next/image** para optimización multimedia (WebP, lazy loading) al añadir imágenes reales.
- Estado global del carrito con React Context (`components/CarritoContext.js`).

## Requisitos

- Node.js 18.17 o superior.

## Instalación y ejecución local

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En vercel.com → New Project → importa el repositorio.
3. Vercel detecta Next.js automáticamente. Deploy sin configuración adicional.
4. Cada push a la rama principal recompila y publica (despliegue continuo).

## Estructura del proyecto

```
app/                  Rutas (App Router)
  page.js             Inicio (hero + storytelling + destacados)
  finca/              Nuestra Finca (storytelling)
  catalogo/           Catálogo de productos
  producto/[slug]/    Ficha de producto (SSG por producto)
  experiencias/       Experiencias con selector de fechas
  contacto/           Formulario de contacto
  layout.js           Layout raíz, tipografías, provider de carrito
  globals.css         Estilos base y componentes Tailwind
components/            Componentes reutilizables
  Header, Footer, ProductoCard, ExperienciaCard,
  BotonAgregar, FormularioContacto, CarritoContext
data/                 Datos estáticos (productos, experiencias)
public/img/           Imágenes (añadir fotografías reales de la finca)
```

## Nota sobre las imágenes

Las cards muestran ahora un marcador tipográfico como placeholder. Para las
capturas finales del TFM, coloca las fotografías reales en `public/img/` y
sustitúyelas usando el componente `next/image` (redimensiona y sirve en WebP
con lazy loading automáticamente).

## Datos de contenido

El catálogo y las experiencias usan datos reales de Kilamupi (café, vainilla,
cacao, cultura Upano, Parque Nacional Sangay) combinados con datos de ejemplo
coherentes (precios, fechas, stock) que deberás ajustar a la información real
de la finca antes del depósito.
