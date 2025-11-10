import { Hero } from "@/components/hero"
import { GroupBuyList } from "@/components/group-buy-list"
import { How } from "@/components/how"

export default function Page(){
  return (
    <>
      <section className="py-8">
        <Hero />
      </section>

      <section id="pools" className="py-10">
        <h2 className="text-2xl font-bold mb-1">Aktuelle Pools</h2>
        <p className="text-[var(--text-dim)]">
          Wähle ein Produkt und nimm <strong>kostenpflichtig</strong> am Pool teil. Der Preis kann nur günstiger werden – nie teurer.
        </p>
        <GroupBuyList />
      </section>

      <section id="how" className="py-12">
        <How />
      </section>
    </>
  )
}
