import type { GroupBuy } from "@/types/groupbuy"

export const groupbuys: GroupBuy[] = [
  {
    id: "mehl-25kg",
    productTitle: "Weizenmehl 25 kg Sack",
    vendor: "AT-Mühle",
    variant: "25 kg Sack",
    targetKg: 500,
    currentKg: 340,
    currentPricePerKg: 24.90,
    tiers: [
      { pct: 0, pricePerKg: 24.90, thresholdKg: 0 },
      { pct: 5, pricePerKg: 23.66, thresholdKg: 200 },
      { pct: 9, pricePerKg: 22.66, thresholdKg: 500 },
    ],
    cutOffLabel: "Mo 14:00",
    cta: "Jetzt mitbestellen & sparen",
  },
  {
    id: "oel-10l",
    productTitle: "Sonnenblumenöl 10 L Kanister",
    vendor: "",
    variant: "10 L",
    targetKg: 400,
    currentKg: 120,
    currentPricePerKg: 19.90,
    tiers: [
      { pct: 0, pricePerKg: 19.90, thresholdKg: 0 },
      { pct: 4, pricePerKg: 19.10, thresholdKg: 150 },
      { pct: 8, pricePerKg: 18.31, thresholdKg: 400 },
    ],
    cutOffLabel: "Mo 14:00",
    cta: "Jetzt mitbestellen & sparen",
  },
]
