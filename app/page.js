import Link from 'next/link';
import ProductoCard from '@/components/ProductoCard';
import { productos } from '@/data/productos';
import Image from 'next/image';

export default function Home() {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <>
            {/* Hero: la tesis visual — Valle del Upano */}
      <section className="relative overflow-hidden bg-selva text-crema">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero.jpg"
            alt="Finca AgroEcológica Kilamupi en el valle del Upano"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
                <div className="relative z-10 contenedor grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-upano">Valle del Upano · Morona Santiago</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Donde el bosque primario se cultiva con las manos
            </h1>
            <p className="mt-6 max-w-lg font-body text-base text-crema/80 sm:text-lg">
              Café, vainilla y cacao de origen, y experiencias de agroturismo a
              las puertas del Parque Nacional Sangay. Un proyecto agroecológico
              en la tierra de la cultura Upano.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/catalogo" className="btn-primary">
                Ver el catálogo
              </Link>
              <Link
                href="/experiencias"
                className="btn border border-crema/30 text-crema hover:bg-crema hover:text-selva"
              >
                Reservar una experiencia
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="aspect-square w-full max-w-sm rounded-3xl border border-crema/15 bg-plantacion/20 p-8">
              <div className="flex h-full flex-col justify-between">
                <p className="font-display text-2xl font-semibold">
                  1.450 msnm
                </p>
                <p className="font-body text-sm text-crema/70">
                  Altura de cultivo bajo sombra de bosque primario, junto a los
                  vestigios de la Ciudad Perdida del Upano.
                </p>
                <p className="font-display text-2xl font-semibold">
                  Lotes pequeños, curado artesanal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling breve */}
      <section className="contenedor py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="eyebrow">Agroecología</p>
            <h2 className="titulo mt-2 text-xl">Suelo vivo, sombra y biodiversidad</h2>
            <p className="mt-3 font-body text-sm text-tierra/70">
              Sistemas agroforestales que conservan el bosque mientras producen
              alimentos de origen, sin agroquímicos.
            </p>
          </div>
          <div>
            <p className="eyebrow">Cultura Upano</p>
            <h2 className="titulo mt-2 text-xl">Un valle con memoria milenaria</h2>
            <p className="mt-3 font-body text-sm text-tierra/70">
              La finca convive con el legado de la cultura Upano, reconocida por
              los hallazgos arqueológicos de la Ciudad Perdida.
            </p>
          </div>
          <div>
            <p className="eyebrow">Origen</p>
            <h2 className="titulo mt-2 text-xl">Trazabilidad de la parcela a la taza</h2>
            <p className="mt-3 font-body text-sm text-tierra/70">
              Cada lote cuenta su procedencia, su proceso y su temporada. Nada
              anónimo, nada masivo.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas de la finca */}
      <section className="bg-selva text-crema">
        <div className="contenedor grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-upano sm:text-5xl">1.100</p>
            <p className="mt-2 font-body text-sm text-crema/70">metros sobre el nivel del mar</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-upano sm:text-5xl">2</p>
            <p className="mt-2 font-body text-sm text-crema/70">variedades de arábica: Catuaí y Borbón</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-upano sm:text-5xl">100%</p>
            <p className="mt-2 font-body text-sm text-crema/70">cultivo orgánico bajo sombra</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-upano sm:text-5xl">SCAA</p>
            <p className="mt-2 font-body text-sm text-crema/70">calidad certificada de especialidad</p>
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="contenedor pt-20 pb-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Del último ciclo</p>
            <h2 className="titulo text-2xl sm:text-3xl">Lotes destacados</h2>
          </div>
          <Link href="/catalogo" className="font-body text-sm font-semibold text-upano hover:underline">
            Ver todo →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {destacados.map((p) => (
            <ProductoCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>
    </>
  );
}
