"use client"

import { groupbuys } from "@/data/groupbuys"
import { GroupBuyCard } from "./group-buy-card"

export function GroupBuyList(){
  function onJoin(id: string, qty = 25){
    // später: POST /api/orders – für jetzt Demo
    console.log("JOIN", id, qty)
    alert(`Teilnahme bestätigt: ${id} · ${qty} kg`)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {groupbuys.map((d)=> <GroupBuyCard key={d.id} data={d} onJoin={onJoin} />)}
    </div>
  )
}
