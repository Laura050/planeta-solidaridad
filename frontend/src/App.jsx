import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

// Page d'accueil
const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center my-12">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Tu futuro financiero comienza aquí</h1>
      <p className="text-xl text-gray-600 mb-8">Soluciones de crédito personalizadas para tus necesidades</p>
      <Link to="/solicitud" className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700">
        Comenzar
      </Link>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Préstamo Personal</h3>
        <p className="text-gray-600">Financiamiento para tus proyectos personales</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Préstamo Inmobiliario</h3>
        <p className="text-gray-600">Haz realidad el sueño de tu casa propia</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Préstamo de Estudios</h3>
        <p className="text-gray-600">Invierte en tu educación y futuro</p>
      </div>
    </div>
  </div>
)

// Pages simplifiées pour les autres routes
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
