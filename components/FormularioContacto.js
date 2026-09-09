'use client';

import { useState } from 'react';

const CANALES = ['WhatsApp', 'Llamada', 'Correo'];

export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [datos, setDatos] = useState({
    nombre: '',
    telefono: '',
    email: '',
    canal: 'WhatsApp',
    mensaje: '',
  });

  const necesitaEmail = datos.canal === 'Correo';
  const completo =
    datos.nombre &&
    datos.telefono &&
    datos.mensaje &&
    (!necesitaEmail || datos.email);

  function actualizar(campo, valor) {
    setDatos((d) => ({ ...d, [campo]: valor }));
  }

  function enviar() {
    if (!completo) return;
    // Sin backend: se simula el envío en el cliente.
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="card p-8 text-center" role="status">
        <p className="font-display text-xl font-semibold text-selva">
          Gracias, {datos.nombre.split(' ')[0]}
        </p>
        <p className="mt-2 font-body text-sm text-tierra/70">
          Recibimos tu mensaje. Te contactaremos por {datos.canal.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <div className="card space-y-4 p-6 sm:p-8">
      <div>
        <label htmlFor="nombre" className="mb-1 block font-body text-sm font-medium text-tierra">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={datos.nombre}
          onChange={(e) => actualizar('nombre', e.target.value)}
          className="w-full rounded-lg border border-arena bg-white px-3 py-2 font-body text-sm focus:border-plantacion focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1 block font-body text-sm font-medium text-tierra">
          Teléfono móvil
        </label>
        <input
          id="telefono"
          type="tel"
          value={datos.telefono}
          onChange={(e) => actualizar('telefono', e.target.value)}
          placeholder="+593 9 ..."
          className="w-full rounded-lg border border-arena bg-white px-3 py-2 font-body text-sm focus:border-plantacion focus:outline-none"
        />
      </div>

      <div>
        <span className="mb-2 block font-body text-sm font-medium text-tierra">
          ¿Cómo prefieres que te contactemos?
        </span>
        <div className="flex flex-wrap gap-2">
          {CANALES.map((c) => {
            const activo = datos.canal === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => actualizar('canal', c)}
                aria-pressed={activo}
                className={`rounded-full border px-4 py-1.5 font-body text-sm font-medium transition-colors ${
                  activo
                    ? 'border-upano bg-upano text-crema'
                    : 'border-arena text-tierra hover:border-plantacion'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block font-body text-sm font-medium text-tierra">
          Correo electrónico {necesitaEmail ? '' : '(opcional)'}
        </label>
        <input
          id="email"
          type="email"
          value={datos.email}
          onChange={(e) => actualizar('email', e.target.value)}
          className="w-full rounded-lg border border-arena bg-white px-3 py-2 font-body text-sm focus:border-plantacion focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1 block font-body text-sm font-medium text-tierra">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          value={datos.mensaje}
          onChange={(e) => actualizar('mensaje', e.target.value)}
          className="w-full rounded-lg border border-arena bg-white px-3 py-2 font-body text-sm focus:border-plantacion focus:outline-none"
        />
      </div>

      <button
        onClick={enviar}
        disabled={!completo}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        Enviar mensaje
      </button>
    </div>
  );
}