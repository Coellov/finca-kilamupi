'use client';
import Image from 'next/image';

import { useState } from 'react';

const fmt = new Intl.DateTimeFormat('es-EC', {
  day: 'numeric',
  month: 'long',
});

export default function ExperienciaCard({ experiencia }) {
  const [fecha, setFecha] = useState(null);
  const [solicitada, setSolicitada] = useState(false);

  function solicitar() {
    if (!fecha) return;
    setSolicitada(true);
  }

  return (
        <article className="card flex flex-col overflow-hidden">
      <div className="relative aspect-[3/2] bg-plantacion/10">
        <Image
          src={experiencia.imagen}
          alt={experiencia.nombre}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-selva">
            {experiencia.nombre}
          </h3>
          <p className="mt-1 font-body text-xs text-tierra/60">
            {experiencia.duracion} · cupo {experiencia.cupo} · ${experiencia.precio}
          </p>
        </div>
      </div>

      <p className="mt-3 font-body text-sm text-tierra/75">
        {experiencia.descripcion}
      </p>

      <div className="mt-5">
        <p className="eyebrow mb-2">Fechas disponibles</p>
        <div className="flex flex-wrap gap-2">
          {experiencia.fechas.map((f) => {
            const activa = fecha === f;
            return (
              <button
                key={f}
                onClick={() => { setFecha(f); setSolicitada(false); }}
                aria-pressed={activa}
                className={`rounded-full border px-3 py-1.5 font-body text-xs font-medium transition-colors ${
                  activa
                    ? 'border-upano bg-upano text-crema'
                    : 'border-arena text-tierra hover:border-plantacion'
                }`}
              >
                {fmt.format(new Date(f))}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        {solicitada ? (
          <p
            className="rounded-lg bg-plantacion/10 px-4 py-3 font-body text-sm text-selva"
            role="status"
          >
            Solicitud registrada para el {fmt.format(new Date(fecha))}. Te
            contactaremos para confirmar el cupo.
          </p>
        ) : (
          <button
            onClick={solicitar}
            disabled={!fecha}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
          >
            {fecha ? 'Solicitar reserva' : 'Elige una fecha'}
          </button>
        )}
            </div>
      </div>
    </article>
  );
}
