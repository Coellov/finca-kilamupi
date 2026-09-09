import Link from 'next/link';
import { notFound } from 'next/navigation';
import BotonAgregar from '@/components/BotonAgregar';
import { productos, getProducto } from '@/data/productos';
import Image from 'next/image';

// SSG: se pre-renderiza una página estática por cada producto en build time.
export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const producto = getProducto(params.slug);
  if (!producto) return {};
  return {
    title: `${producto.nombre} — Finca Kilamupi`,
    description: producto.descripcion,
  };
}

export default function ProductoPage({ params }) {
  const producto = getProducto(params.slug);
  if (!producto) notFound();

  const escaso = producto.stockLote <= 6;

  return (
    <section className="contenedor py-14">
      <Link
        href="/catalogo"
        className="font-body text-sm font-medium text-plantacion hover:text-upano"
      >
        ← Volver al catálogo
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-plantacion/10">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
          <span
            className={`absolute left-4 top-4 rounded-full px-4 py-1.5 font-body text-xs font-semibold ${
              escaso ? 'bg-upano text-crema' : 'bg-crema text-selva'
            }`}
          >
            {escaso
              ? `Quedan ${producto.stockLote} · lote pequeño`
              : `Lote de ${producto.stockLote}`}
          </span>
        </div>

        <div className="flex flex-col">
          <p className="eyebrow">{producto.categoria}</p>
          <h1 className="titulo mt-2 text-3xl sm:text-4xl">{producto.nombre}</h1>
          <p className="mt-4 font-display text-3xl font-semibold text-selva">
            ${producto.precio.toFixed(2)}
            <span className="ml-2 font-body text-sm font-normal text-tierra/60">
              / {producto.unidad}
            </span>
          </p>

          <p className="mt-6 font-body text-tierra/80">{producto.descripcion}</p>

          <dl className="mt-8 space-y-3 border-t border-arena pt-6 font-body text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-tierra/60">Origen</dt>
              <dd className="text-right font-medium text-tierra">{producto.origen}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-tierra/60">Proceso</dt>
              <dd className="text-right font-medium text-tierra">{producto.proceso}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-tierra/60">Notas</dt>
              <dd className="text-right font-medium text-tierra">{producto.notas}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <BotonAgregar producto={producto} ancho />
          </div>
        </div>
      </div>
    </section>
  );
}
