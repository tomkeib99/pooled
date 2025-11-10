import type { GroupBuy } from "@/types/groupbuy"

export function activeTierIndex(item: GroupBuy){
  let idx = 0
  for (let i = 0; i < item.tiers.length; i++){
    if (item.currentKg >= item.tiers[i].thresholdKg) idx = i
  }
  return idx
}
export function progressPct(item: GroupBuy){
  return Math.min(100, Math.round((item.currentKg / item.targetKg) * 100))
}
export function currentPrice(item: GroupBuy){
  const i = activeTierIndex(item)
  return item.tiers[i]?.pricePerKg ?? item.currentPricePerKg
}
export function nextTierLabel(item: GroupBuy){
  const i = activeTierIndex(item)
  const next = item.tiers[i+1]
  if (!next) return "Beste Stufe erreicht"
  const rest = Math.max(0, next.thresholdKg - item.currentKg)
  return `Nächste Stufe: ${next.pct}% ab ${next.thresholdKg.toLocaleString("de-AT")} kg (noch ${rest.toLocaleString("de-AT")} kg)`
}
