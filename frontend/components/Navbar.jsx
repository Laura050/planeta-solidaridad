import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et nom */}
          <Link to="/" className="flex items-center space-x-2">
            <svg width="40" height="40" viewBox="0 0 400 300">
              {/* Logo SVG ici - cercle de mains */}
              <g transform="translate(200, 150)">
                <circle cx="0" cy="0" r="120" fill="#7cb342" />
                <path d="M-60,-60 L60,-60 L0,60 Z" fill="#1e88e5" />
              </g>
            </svg>
            <span className="text-2xl font-bold text-green-700">
              Planeta Solidaridad
            </span>
          </Link>

          {/* Menu de navigation */}
          <div className="flex space-x-6">
            <Link 
              to="/solicitud" 
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Solicitar Crédito
            </Link>
            <Link 
              to="/seguimiento" 
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Seguimiento
            </Link>
            <Link 
              to="/testimonios" 
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Testimonios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
