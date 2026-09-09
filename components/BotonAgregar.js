'use client';

import { useState } from 'react';
import { useCarrito } from './CarritoContext';

export default function BotonAgregar({ producto, ancho = false }) {
  const { agregar } = useCarrito();
  const [agregado, setAgregado] = useState(false);

  function handleClick() {
    agregar(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1600);
  }

  return (
    <button
      onClick={handleClick}
      className={`btn-primary ${ancho ? 'w-full' : ''}`}
      aria-live="polite"
    >
      {agregado ? 'Añadido al carrito' : 'Añadir al carrito'}
    </button>
  );
}
