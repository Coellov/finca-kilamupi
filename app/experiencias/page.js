import ExperienciaCard from '@/components/ExperienciaCard';
import { experiencias } from '@/data/experiencias';

export const metadata = {
  title: 'Experiencias — Finca Kilamupi',
  description:
    'Catación de café, avistamiento de aves, sendero de la cultura Upano y yoga entre plantaciones. Agroturismo en el Valle del Upano.',
};

export default function ExperienciasPage() {
  return (
    <section className="contenedor py-16">
      <p className="eyebrow">Agroturismo</p>
      <h1 className="titulo mt-2 text-3xl sm:text-4xl">Experiencias</h1>
      <p className="mt-4 max-w-2xl font-body text-tierra/70">
        Vive la finca de cerca. Elige una fecha y envía tu solicitud de reserva;
        confirmamos el cupo por contacto directo.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experiencias.map((e) => (
          <ExperienciaCard key={e.slug} experiencia={e} />
        ))}
      </div>
    </section>
  );
}
