
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SellCycle from './pages/SellCycle'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<SellCycle />} />
        </Routes>
      </div>
    </div>
  )
}
