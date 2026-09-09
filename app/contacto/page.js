import MapaUbicacion from '@/components/MapaUbicacion';
import FormularioContacto from '@/components/FormularioContacto';

export const metadata = {
  title: 'Contacto — Finca Kilamupi',
  description:
    'Escríbenos para pedidos de lotes, reservas de experiencias o visitas a la Finca Kilamupi en Morona Santiago.',
};

export default function ContactoPage() {
  return (
    <section className="contenedor py-16">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1 className="titulo mt-2 text-3xl sm:text-4xl">Hablemos</h1>
          <p className="mt-4 font-body text-tierra/75">
            ¿Quieres reservar una experiencia, pedir un lote o visitar la finca?
            Déjanos tu mensaje y te respondemos directamente.
          </p>

          <dl className="mt-8 space-y-4 font-body text-sm">
            <div>
              <dt className="text-tierra/60">Ubicación</dt>
              <dd className="font-medium text-tierra">
                Morona Santiago, Ecuador · cerca del Parque Nacional Sangay
              </dd>
            </div>
            <div>
              <dt className="text-tierra/60">Disponibilidad</dt>
              <dd className="font-medium text-tierra">
                Experiencias sujetas a cupo y temporada
              </dd>
            </div>
          </dl>
                    <div className="mt-8">
            <MapaUbicacion />
          </div>
        </div>

        <FormularioContacto />
      </div>
    </section>
  );
}
