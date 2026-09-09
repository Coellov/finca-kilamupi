import Image from 'next/image';
export const metadata = {
  title: 'Nuestra Finca — Kilamupi',
  description:
    'Agroecología, conservación del bosque primario y legado de la cultura Upano en el Valle del Upano, Morona Santiago.',
};

const bloques = [
  {
    eyebrow: 'Manejo agroecológico',
    titulo: 'Producir sin agotar la tierra',
    texto:
      'Kilamupi cultiva bajo sistemas agroforestales que imitan la estructura del bosque: sombra, capas de vegetación y suelo vivo. No usamos agroquímicos. La fertilidad viene de la materia orgánica y de la biodiversidad que sostiene el sistema, lo que da como resultado productos de origen con un perfil sensorial propio del territorio.',
  },
  {
    eyebrow: 'Conservación',
    titulo: 'Bosque primario a las puertas del Sangay',
    texto:
      'Parte del territorio de la finca conserva remanentes de bosque primario colindantes con el Parque Nacional Sangay. Este entorno es hábitat de aves endémicas y regula el agua y el clima local. Conservarlo no es un añadido: es la condición que hace posible el cultivo y las experiencias de agroturismo.',
  },
  {
    eyebrow: 'Cultura Upano',
    titulo: 'Un valle con memoria milenaria',
    texto:
      'El Valle del Upano guarda el legado de la cultura Upano, reconocida internacionalmente por los hallazgos arqueológicos de la llamada Ciudad Perdida. Ese patrimonio forma parte del relato de cada producto y de cada recorrido: quien visita Kilamupi camina sobre una historia que precede en milenios a las plantaciones.',
  },
];

export default function FincaPage() {
  return (
    <>
            <section className="relative overflow-hidden bg-selva text-crema">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/finca.jpg"
            alt="Bosque y cafetales de la Finca AgroEcológica Kilamupi"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 contenedor py-24">
          <p className="eyebrow text-upano">Nuestra Finca</p>
          <h1 className="titulo mt-2 max-w-3xl text-3xl text-crema sm:text-4xl md:text-5xl">
            Agroecología, bosque y memoria en el Valle del Upano
          </h1>
        </div>
      </section>

      <section className="contenedor py-16">
        <div className="mx-auto max-w-3xl space-y-14">
          {bloques.map((b) => (
            <article key={b.titulo}>
              <p className="eyebrow">{b.eyebrow}</p>
              <h2 className="titulo mt-2 text-2xl">{b.titulo}</h2>
              <p className="mt-4 font-body text-tierra/80 leading-relaxed">
                {b.texto}
              </p>
            </article>
          ))}
        </div>
           </section>

      {/* Proceso del café */}
      <section className="border-t border-plantacion/30 bg-crema">
        <div className="contenedor py-16">
          <p className="eyebrow text-center">Del grano a la taza</p>
          <h2 className="titulo mt-2 text-center text-2xl sm:text-3xl">
            Nuestro proceso
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
            {[
              { img: '/img/proceso-1.png', paso: 'Siembra', texto: 'Germinación en semilleros propios' },
              { img: '/img/proceso-2.png', paso: 'Cultivo', texto: 'Bajo sombra de árboles nativos' },
              { img: '/img/proceso-3.png', paso: 'Cosecha', texto: 'Recolección manual y selectiva' },
              { img: '/img/proceso-4.png', paso: 'Proceso', texto: 'Lavado y secado al sol' },
              { img: '/img/proceso-5.png', paso: 'Tueste', texto: 'Tostado artesanal por lotes' },
            ].map((etapa, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                                <div className="relative h-40 w-40">
                  <Image
                    src={etapa.img}
                    alt={etapa.paso}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-selva">
                  {etapa.paso}
                </p>
                <p className="mt-1 font-body text-xs text-tierra/70">
                  {etapa.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
