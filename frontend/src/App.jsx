import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Importations directes des composants
const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">Planeta Solidaridad</Link>
        <div className="flex space-x-6">
          <Link to="/solicitud" className="text-gray-700 hover:text-green-600">Solicitar Crédito</Link>
          <Link to="/seguimiento" className="text-gray-700 hover:text-green-600">Seguimiento</Link>
          <Link to="/testimonios" className="text-gray-700 hover:text-green-600">Testimonios</Link>
        </div>
      </div>
    </div>
  </nav>
)

// Pages simplifiées
const Home = () => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-green-600 mb-4">Planeta Solidaridad</h1>
    <p className="text-xl mb-8">Tu futuro financiero comienza aquí</p>
    <Link to="/solicitud" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium">Comenzar</Link>
  </div>
)

const SolicitudCredito = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Solicitud de Crédito</h1>
    <p>Formulario de solicitud de crédito...</p>
  </div>
)

const SeguimientoCredito = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Seguimiento de Solicitud</h1>
    <p>Seguimiento de su solicitud de crédito...</p>
  </div>
)

const Testimonios = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Testimonios de Clientes</h1>
    <p>Testimonios de nuestros clientes...</p>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solicitud" element={<SolicitudCredito />} />
          <Route path="/seguimiento" element={<SeguimientoCredito />} />
          <Route path="/testimonios" element={<Testimonios />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
