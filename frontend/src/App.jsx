import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { SolicitudCredito } from './pages/SolicitudCredito'
import { SeguimientoCredito } from './pages/SeguimientoCredito'
import { Testimonios } from './pages/Testimonios'
import { AdminDashboard } from './pages/AdminDashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitud" element={<SolicitudCredito />} />
        <Route path="/seguimiento" element={<SeguimientoCredito />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
