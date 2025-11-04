
import React from 'react'
import CycleCard from '../components/CycleCard'

const cycles = [
  { id: 1, name: 'Hero Sprint', price: '₹8,000', desc: 'Used for 2 years, good condition.' },
  { id: 2, name: 'Btwin Rockrider', price: '₹15,000', desc: 'MTB, 21 gears, excellent performance.' },
  { id: 3, name: 'Firefox Bad Attitude', price: '₹10,500', desc: 'Well maintained, single owner.' }
]

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Used Cycles for Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cycles.map(cycle => <CycleCard key={cycle.id} {...cycle} />)}
      </div>
    </div>
  )
}
