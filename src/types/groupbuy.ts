export type Tier = { pct: number; pricePerKg: number; thresholdKg: number }
export type GroupBuy = {
  id: string
  productTitle: string
  vendor: string
  variant: string
  targetKg: number
  currentKg: number
  currentPricePerKg: number
  tiers: Tier[]
  cutOffLabel: string
  cta: string
}
