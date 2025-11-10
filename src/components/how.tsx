export function How(){
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <Card span={6}><Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" alt="Bestellen"/></Card>
      <Card span={6}><Body title="1. Bestellen" text="Wähle Produkt und Menge. Nach dem Cut-off wird deine Bestellung verbindlich an den Lieferpartner übermittelt."/></Card>

      <Card span={6}><Body title="2. Pooling" text="Wir bündeln alle Bestellungen bis Montag 14:00. Je mehr zusammenkommt, desto besser die Preisstaffel."/></Card>
      <Card span={6}><Img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" alt="Pooling"/></Card>

      <Card span={6}><Img src="https://images.unsplash.com/photo-1517959105821-eaf2591984b5?q=80&w=1200&auto=format&fit=crop" alt="Lieferung"/></Card>
      <Card span={6}><Body title="3. Lieferung & Rechnung" text="Lieferung erfolgt direkt durch den Händler. Die Rechnung kommt vom Händler, Zahlungsziel nach Lieferung (B2B-üblich)."/></Card>

      <Card span={12}><Body title="Unsere Mission" text="Wir machen Beschaffung fairer: Durch gemeinsames Bestellen ermöglichen wir bessere Preise für alle teilnehmenden Betriebe – transparent, direkt und ohne Zwischenhandel."/></Card>
    </div>
  )
}
function Card({children, span}:{children:React.ReactNode; span:number}){
  return <div className={`col-span-12 md:col-span-${span} border border-[var(--border)] rounded-[16px] bg-[var(--surface)] shadow-card overflow-hidden`}>{children}</div>
}
function Img({src, alt}:{src:string; alt:string}){
  return <div className="aspect-[16/10]"><img src={src} alt={alt} className="w-full h-full object-cover"/></div>
}
function Body({title, text}:{title:string; text:string}){
  return <div className="p-4"><h3 className="m-0 font-semibold mb-1">{title}</h3><p className="text-[var(--text-dim)]">{text}</p></div>
}
