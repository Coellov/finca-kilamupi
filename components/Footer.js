import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 bg-selva text-crema">
      <div className="contenedor grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">Finca AgroEcológica Kilamupi</p>
          <p className="mt-3 max-w-xs font-body text-sm text-crema/70">
            Finca agroecológica en el Valle del Upano, Morona Santiago. Café,
            vainilla y cacao de origen, y experiencias de agroturismo.
          </p>
        </div>

        <div>
          <p className="eyebrow text-crema/60">Explorar</p>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li><Link href="/finca" className="hover:text-upano">Nuestra Finca</Link></li>
            <li><Link href="/catalogo" className="hover:text-upano">Catálogo</Link></li>
            <li><Link href="/experiencias" className="hover:text-upano">Experiencias</Link></li>
            <li><Link href="/contacto" className="hover:text-upano">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-crema/60">Ubicación</p>
          <p className="mt-4 font-body text-sm text-crema/80">
            Morona Santiago, Ecuador<br />
            Cerca del Parque Nacional Sangay
          </p>
        </div>
      </div>

      <div className="border-t border-crema/15">
        <div className="contenedor py-5 font-body text-xs text-crema/50">
          © {new Date().getFullYear()} Finca Kilamupi. Proyecto desarrollado como
          Trabajo Fin de Máster — UNIR.
        </div>
      </div>
    </footer>
  );
}
