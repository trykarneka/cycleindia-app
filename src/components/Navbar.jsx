
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/">CycleIndia</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/">Home</Link>
        <Link to="/sell">Sell Cycle</Link>
        <span>Login</span>
        <span>Cart</span>
      </div>
    </nav>
  )
}
