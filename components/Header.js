'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCarrito } from './CarritoContext';

const enlaces = [
  { href: '/finca', texto: 'Nuestra Finca' },
  { href: '/catalogo', texto: 'Catálogo' },
  { href: '/experiencias', texto: 'Experiencias' },
  { href: '/contacto', texto: 'Contacto' },
];

export default function Header() {
  const { cantidadTotal } = useCarrito();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-arena bg-crema/90 backdrop-blur">
      <div className="contenedor flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold text-selva">
          Finca Kilamupi
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="font-body text-sm font-medium text-tierra transition-colors hover:text-upano"
            >
              {e.texto}
            </Link>
          ))}
          <span
            className="rounded-full bg-selva px-3 py-1 font-body text-xs font-semibold text-crema"
            aria-label={`Carrito: ${cantidadTotal} artículos`}
          >
            Carrito · {cantidadTotal}
          </span>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setAbierto((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={abierto}
        >
          <span className="block h-0.5 w-6 bg-selva" />
          <span className="mt-1.5 block h-0.5 w-6 bg-selva" />
          <span className="mt-1.5 block h-0.5 w-6 bg-selva" />
        </button>
      </div>

      {abierto && (
        <nav className="border-t border-arena bg-crema md:hidden" aria-label="Móvil">
          <div className="contenedor flex flex-col py-3">
            {enlaces.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="py-2 font-body text-sm font-medium text-tierra"
              >
                {e.texto}
              </Link>
            ))}
            <span className="py-2 font-body text-sm font-semibold text-selva">
              Carrito · {cantidadTotal}
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}
