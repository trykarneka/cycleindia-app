
import React, { useState } from 'react'

export default function SellCycle() {
  const [image, setImage] = useState(null)
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cycle uploaded successfully!')
    setImage(null)
    setDesc('')
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sell Your Cycle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Describe the condition, gear set, type of tyres, etc."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border p-2 rounded h-32"
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Upload
        </button>
      </form>
    </div>
  )
}
