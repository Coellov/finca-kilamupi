// Catálogo de productos orgánicos de la Finca Kilamupi.
// Datos estáticos: se consumen en build time (SSG) para pre-renderizar
// el catálogo y cada ficha de producto sin necesidad de backend.

export const productos = [
  {
    slug: 'cafe-arabigo-catuai',
    nombre: 'Café Arábigo — Catuaí',
    categoria: 'Café',
    precio: 8.5,
    unidad: '250 g',
    stockLote: 8,
    imagen: '/img/cafe.jpg',
    origen: 'Valle del Alto Upano, 1.100 msnm',
    proceso: 'Lavado, secado al sol',
    notas: 'Panela, cacao y un final cítrico limpio.',
    descripcion:
      'Café arábica variedad Catuaí, cultivado en la finca familiar bajo sombra en el valle formado por los ríos Upano y Yuquipa. Cosechado y procesado de forma artesanal para preservar el perfil de taza.',
    destacado: true,
  },
  {
    slug: 'cafe-arabigo-borbon',
    nombre: 'Café Arábigo — Borbón',
    categoria: 'Café',
    precio: 9.0,
    unidad: '250 g',
    stockLote: 6,
    imagen: '/img/cafe-molido.jpg',
    origen: 'Valle del Alto Upano, 1.100 msnm',
    proceso: 'Lavado, tueste medio',
    notas: 'Cuerpo dulce, notas frutales y florales.',
    descripcion:
      'Café arábica variedad Borbón, reconocido por su dulzor y complejidad. Producido de manera orgánica en la finca, desde la siembra en invernaderos propios hasta el tostado.',
    destacado: true,
  },
  {
    slug: 'vainilla-amazonica',
    nombre: 'Vainilla Amazónica en Vaina',
    categoria: 'Vainilla',
    precio: 22.0,
    unidad: '3 vainas',
    stockLote: 5,
    imagen: '/img/vainilla.jpg',
    origen: 'Sotobosque agroecológico, valle del Upano',
    proceso: 'Curado tradicional',
    notas: 'Aroma intenso, dulzor floral y madera.',
    descripcion:
      'Vainilla polinizada a mano y curada con métodos artesanales. Su producción limitada responde al ciclo natural de la planta y al manejo sostenible del sotobosque.',
    destacado: false,
  },
  {
    slug: 'cacao-fino-aroma',
    nombre: 'Cacao Fino de Aroma — Nibs',
    categoria: 'Cacao',
    precio: 11.0,
    unidad: '200 g',
    stockLote: 12,
    imagen: '/img/cacao.jpg',
    origen: 'Sistema agroforestal, valle del Upano',
    proceso: 'Fermentado en cajón, tostado ligero',
    notas: 'Frutos rojos, nuez y amargor equilibrado.',
    descripcion:
      'Nibs de cacao fino de aroma provenientes de un sistema agroforestal que integra sombra, biodiversidad y suelo vivo. Ideal para repostería o consumo directo.',
    destacado: false,
  },
];

export function getProducto(slug) {
  return productos.find((p) => p.slug === slug);
}
