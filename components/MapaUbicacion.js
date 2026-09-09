export default function MapaUbicacion() {
  const coordsUrl = "https://www.google.com/maps?q=-2.236333,-78.080402";

  return (
    <div className="card overflow-hidden">
      <div className="bg-selva p-8 text-crema">
        <p className="eyebrow text-upano">Donde estamos</p>
        <p className="mt-3 font-display text-2xl font-semibold">Valle del Upano</p>
        <p className="mt-1 font-body text-sm text-crema/70">Morona Santiago, Ecuador</p>

        <div className="mt-6 space-y-3 border-t border-crema/15 pt-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-upano">&#9670;</span>
            <p className="font-body text-sm text-crema/85">En el valle formado por los rios Upano y Yuquipa, a 1.100 msnm</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-upano">&#9670;</span>
            <p className="font-body text-sm text-crema/85">A pocos kilometros de la ciudad de Macas</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-upano">&#9670;</span>
            <p className="font-body text-sm text-crema/85">En el entorno del Parque Nacional Sangay</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 p-5">
        <p className="font-body text-xs text-tierra/60">Lat -2.2363, Lon -78.0804</p>
        <a href={coordsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">Ver en Google Maps</a>
      </div>
    </div>
  );
}