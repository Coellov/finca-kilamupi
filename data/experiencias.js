// Experiencias agroturísticas ofrecidas por la Finca Kilamupi.
// Datos estáticos consumidos en build time (SSG).

export const experiencias = [
  {
    slug: 'catacion-cafe',
        imagen: '/img/exp-catacion.jpg',
    nombre: 'Catación de Café de Origen',
    duracion: '2 h',
    precio: 25,
    cupo: 8,
    fechas: ['2026-09-06', '2026-09-20', '2026-10-04'],
    resumen:
      'Recorrido sensorial por el perfil de taza de nuestros lotes, guiado por el caficultor.',
    descripcion:
      'Una sesión práctica donde se aprende a identificar aromas, acidez y cuerpo mientras se conoce el proceso desde la cereza hasta la taza. Incluye degustación de tres lotes.',
  },
  {
    slug: 'avistamiento-aves',
        imagen: '/img/exp-aves.jpg',
    nombre: 'Avistamiento de Aves al Amanecer',
    duracion: '3 h',
    precio: 30,
    cupo: 6,
    fechas: ['2026-09-07', '2026-09-21', '2026-10-05'],
    resumen:
      'Salida guiada por los senderos del bosque primario en la mejor hora para observar aves.',
    descripcion:
      'La finca colinda con remanentes de bosque primario cerca del Parque Nacional Sangay, hábitat de especies endémicas. Recorrido de baja dificultad con guía local.',
  },
  {
    slug: 'sendero-upano',
        imagen: '/img/exp-sendero.jpg',
    nombre: 'Sendero Cultura Upano',
    duracion: '2.5 h',
    precio: 20,
    cupo: 10,
    fechas: ['2026-09-13', '2026-09-27', '2026-10-11'],
    resumen:
      'Caminata interpretativa por los vestigios y el contexto de la cultura Upano.',
    descripcion:
      'Un recorrido que conecta el paisaje agroecológico con el legado de la cultura Upano, recientemente reconocida por los hallazgos de la "Ciudad Perdida" en el valle.',
  },
  {
    slug: 'yoga-plantacion',
        imagen: '/img/exp-yoga.jpg',
    nombre: 'Yoga entre Plantaciones',
    duracion: '1.5 h',
    precio: 18,
    cupo: 12,
    fechas: ['2026-09-14', '2026-09-28', '2026-10-12'],
    resumen: 'Práctica consciente al aire libre rodeada de cafetales y bosque.',
    descripcion:
      'Sesión de yoga suave en un entorno natural, pensada para reconectar con el ritmo de la finca. Apta para todos los niveles.',
  },
];

export function getExperiencia(slug) {
  return experiencias.find((e) => e.slug === slug);
}
