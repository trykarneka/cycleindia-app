
import React from 'react'

export default function CycleCard({ name, price, desc }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-lg transition">
      <img src="https://via.placeholder.com/200" alt={name} className="rounded mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-green-700 font-medium">{price}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}
