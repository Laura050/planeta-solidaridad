import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">Planeta Solidaridad</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/solicitud" className="text-gray-700 hover:text-green-600">
              Solicitar Crédito
            </Link>
            <Link to="/seguimiento" className="text-gray-700 hover:text-green-600">
              Seguimiento
            </Link>
            <Link to="/testimonios" className="text-gray-700 hover:text-green-600">
              Testimonios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
