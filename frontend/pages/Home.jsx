import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Héro */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a Planeta Solidaridad
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Tu futuro financiero comienza aquí
        </p>
        <Link 
          to="/solicitud" 
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700"
        >
          Solicitar Crédito
        </Link>
      </div>

      {/* Types de Crédits */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Préstamo Personal</h3>
          <p className="text-gray-600 mb-4">
            Financiamiento para tus proyectos personales
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Préstamo Inmobiliario</h3>
          <p className="text-gray-600 mb-4">
            Haz realidad el sueño de tu casa propia
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Préstamo de Estudios</h3>
          <p className="text-gray-600 mb-4">
            Invierte en tu educación y futuro
          </p>
        </div>
      </div>

      {/* Section Avantages */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Por qué elegirnos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">Proceso Simple</h3>
              <p className="text-gray-600">Solicitud rápida y sin complicaciones</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">Respuesta Rápida</h3>
              <p className="text-gray-600">Evaluación de solicitud en 24 horas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link 
          to="/seguimiento" 
          className="text-green-600 font-medium hover:text-green-700"
        >
          ¿Ya tienes una solicitud? Sigue tu expediente aquí →
        </Link>
      </div>
    </div>
  )
}

export default Home
