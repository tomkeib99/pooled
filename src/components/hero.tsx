export function Hero(){
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-card">
      <img
        src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2000&auto=format&fit=crop"
        alt="Frische Lebensmittel – gemeinschaftlich bestellen"
        className="w-full h-[520px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50" />
      <div className="absolute left-6 right-6 bottom-6 text-white">
        <h1 className="font-black leading-tight text-[clamp(32px,3.6vw,56px)]">
          Gemeinsam bestellen. Gemeinsam sparen.
        </h1>
        <p className="opacity-95 text-[clamp(16px,1.3vw,18px)]">
          Pooled bündelt Bestellungen von Betrieben. Du bestellst wie immer – der Lieferant liefert direkt,
          und du bekommst automatisch den besten Preis.
        </p>
      </div>
    </div>
  )
}
