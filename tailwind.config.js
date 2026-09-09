/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        selva:     '#1B3A2F', // verde profundo - fondos oscuros, footer
        plantacion:'#3D6B4A', // verde plantación - acentos secundarios
        upano:     '#C65D3B', // terracota Upano - CTA, conversión
        crema:     '#F5F1E8', // crema hueso - fondo de lectura
        tierra:    '#3A3632', // gris cálido - texto principal
        arena:     '#E8DFC8', // beige claro - bordes, cards
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        contenido: '1180px',
      },
    },
  },
  plugins: [],
};
