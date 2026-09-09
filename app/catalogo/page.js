import ProductoCard from '@/components/ProductoCard';
import { productos } from '@/data/productos';

export const metadata = {
  title: 'Catálogo — Finca Kilamupi',
  description:
    'Café, vainilla y cacao de origen en lotes pequeños. Productos orgánicos con trazabilidad completa desde el Valle del Upano.',
};

export default function CatalogoPage() {
  return (
    <section className="contenedor py-16">
      <p className="eyebrow">Productos de origen</p>
      <h1 className="titulo mt-2 text-3xl sm:text-4xl">Catálogo</h1>
      <p className="mt-4 max-w-2xl font-body text-tierra/70">
        Producciones limitadas y artesanales. La disponibilidad depende del
        ciclo de cada cultivo: cuando un lote se agota, esperamos a la siguiente
        cosecha.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <ProductoCard key={p.slug} producto={p} />
        ))}
      </div>
    </section>
  );
}
