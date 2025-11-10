"use client"

import { useState } from "react"
import type { GroupBuy } from "@/types/groupbuy"
import { activeTierIndex, currentPrice, nextTierLabel, progressPct } from "@/lib/groupbuy"

export function GroupBuyCard({ data, onJoin }: { data: GroupBuy; onJoin?: (id:string, qty?:number)=>void }){
  const pct = progressPct(data)
  const at = activeTierIndex(data)
  const nowPrice = currentPrice(data)
  const maxPct = data.tiers.at(-1)?.pct ?? 0
  const nextLabel = nextTierLabel(data)
  const [qty, setQty] = useState(25)

  return (
    <article className="border border-[var(--border)] rounded-[16px] shadow-card bg-[var(--surface)] overflow-hidden flex flex-col">
      <div className="relative aspect-[16/10] bg-[#0a0d13]">
        {/* Optional: Bildplatzhalter oder Vendor-Logo */}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="text-base font-extrabold tracking-[.01em]">
          {data.productTitle}{data.variant ? ` · ${data.variant}` : ""} {data.vendor ? `(${data.vendor})` : ""}
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="font-extrabold text-lg">ab € {nowPrice.toFixed(2)} / kg</div>
          <div className="text-sm text-[var(--text-dim)]">bis zu {maxPct}% Rabatt</div>
        </div>

        {/* Progress über Staffel */}
        <div className="h-2 rounded-full border border-[var(--border)] overflow-hidden">
          <span className="block h-full bg-gradient-to-r from-[var(--primary-2)] to-[var(--primary)]" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex items-center justify-between text-sm text-[var(--text-dim)] flex-wrap gap-2">
          <div>Fortschritt: <strong>{pct}%</strong> ({data.currentKg.toLocaleString("de-AT")} / {data.targetKg.toLocaleString("de-AT")} kg)</div>
          <div>Aktuell: <strong>{data.tiers[at]?.pct ?? 0}%</strong> · {nextLabel}</div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          {data.tiers.map((t, i)=>(
            <div key={i} className={`rounded-[10px] border ${i===at ? "border-[rgba(62,207,142,.45)] bg-[rgba(62,207,142,.08)]" : "border-[var(--border)] bg-white/[.02]"} p-2`}>
              <div><strong>{t.pct}%</strong> Rabatt</div>
              <div className="text-[var(--text-dim)]">ab {t.thresholdKg.toLocaleString("de-AT")} kg</div>
            </div>
          ))}
        </div>

        {/* Menge + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[var(--text-dim)]">Menge</label>
            <select value={qty} onChange={(e)=>setQty(parseInt(e.target.value))}
                    className="bg-transparent border border-[var(--border)] rounded-xl px-2 py-1 text-sm">
              {[5,10,15,20,25,50,100].map(v=> <option key={v} value={v}>{v} kg</option>)}
            </select>
          </div>
          <div className="text-sm text-[var(--text-dim)]">Cut-off: {data.cutOffLabel}</div>
        </div>

        <div className="flex justify-end">
          <button className="btn-primary" onClick={()=>onJoin?.(data.id, qty)}>{data.cta}</button>
        </div>
      </div>
    </article>
  )
}
