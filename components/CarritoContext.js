'use client';

import { createContext, useContext, useState, useCallback } from 'react';

// Estado global del carrito en el lado del cliente.
// Permite que el usuario añada productos y navegue entre secciones
// (storytelling, catálogo, experiencias) sin perder su selección
// ni provocar recargas completas de página — comportamiento propio de una SPA.

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregar = useCallback((producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.slug === producto.slug);
      if (existe) {
        return prev.map((i) =>
          i.slug === producto.slug ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  }, []);

  const quitar = useCallback((slug) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const cantidadTotal = items.reduce((acc, i) => acc + i.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items, agregar, quitar, total, cantidadTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const ctx = useContext(CarritoContext);
  if (!ctx) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return ctx;
}
