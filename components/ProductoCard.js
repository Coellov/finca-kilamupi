import Link from 'next/link';
import Image from 'next/image';

// Card de producto. El indicador de escasez de lote ("Quedan X")
// es el elemento de firma: conecta el storytelling agroecológico
// (producción limitada y artesanal) con la conversión e-commerce.

export default function ProductoCard({ producto }) {
  const escaso = producto.stockLote <= 6;

  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
    >
            <div className="relative aspect-[4/3] bg-plantacion/10">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 font-body text-xs font-semibold ${
            escaso ? 'bg-upano text-crema' : 'bg-crema/90 text-selva'
          }`}
        >
          {escaso
            ? `Quedan ${producto.stockLote} · lote pequeño`
            : `Lote de ${producto.stockLote}`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{producto.categoria}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-selva group-hover:text-upano">
          {producto.nombre}
        </h3>
        <p className="mt-2 flex-1 font-body text-sm text-tierra/70">
          {producto.notas}
        </p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-display text-xl font-semibold text-selva">
            ${producto.precio.toFixed(2)}
          </span>
          <span className="font-body text-xs text-tierra/60">
            {producto.unidad}
          </span>
        </div>
      </div>
    </Link>
  );
}
