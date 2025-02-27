import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Page d'accueil simplifiée
const Home = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Planeta Solidaridad</h1>
      <p className="text-xl text-gray-600">Tu futuro financiero comienza aquí</p>
      <div className="mt-8">
        <Link to="/solicitud" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 inline-block">
          Comenzar
        </Link>
      </div>
    </div>
  </div>
)

// Page de demande simplifiée
const SolicitudCredito = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Solicitud de Crédito</h1>
    <p className="mb-4">Esta página permitirá solicitar un crédito.</p>
    <Link to="/" className="text-green-600 hover:underline">Volver al inicio</Link>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitud" element={<SolicitudCredito />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
