import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SolicitudCredito = () => {
  const [paso, setPaso] = useState(1)
  const [formData, setFormData] = useState({
    tipoCredito: '',
    monto: 50000,
    plazo: 24,
    nombre: '',
    email: '',
    telefono: '',
    documentos: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici nous ajouterons la logique pour envoyer les données au backend
    alert("¡Solicitud enviada con éxito! Su código de seguimiento es: " + Math.random().toString(36).substr(2, 8).toUpperCase())
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {['Tipo de Crédito', 'Información Personal', 'Documentos'].map((step, index) => (
            <span
              key={index}
              className={`text-sm font-medium ${
                paso > index + 1 ? 'text-green-600' :
                paso === index + 1 ? 'text-blue-600' :
                'text-gray-400'
              }`}
            >
              {step}
            </span>
          ))}
        </div>
        <div className="h-2 flex rounded-full overflow-hidden">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex-1 ${
                paso >= step ? 'bg-green-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Étape 1 : Type de crédit */}
      {paso === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Seleccione el Tipo de Crédito</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Crédito</label>
              <select
                name="tipoCredito"
                value={formData.tipoCredito}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Seleccione una opción</option>
                <option value="personal">Préstamo Personal</option>
                <option value="inmobiliario">Préstamo Inmobiliario</option>
                <option value="estudios">Préstamo de Estudios</option>
                <option value="profesional">Préstamo Profesional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Monto (€)</label>
              <input
                type="range"
                name="monto"
                min="1000"
                max="300000"
                step="1000"
                value={formData.monto}
                onChange={handleInputChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1.000€</span>
                <span>{formData.monto.toLocaleString()}€</span>
                <span>300.000€</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Plazo (meses)</label>
              <input
                type="range"
                name="plazo"
                min="12"
                max="240"
                step="12"
                value={formData.plazo}
                onChange={handleInputChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>12 meses</span>
                <span>{formData.plazo} meses</span>
                <span>240 meses</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700">Cuota mensual estimada: <strong>{
                ((formData.monto * (0.035 / 12)) / (1 - Math.pow(1 + (0.035 / 12), -formData.plazo))).toFixed(2)
              }€</strong></p>
              <p className="text-sm text-red-600 mt-2">Antes de validar tu solicitud, debes saber que un crédito se devuelve.</p>
            </div>

            <button
              onClick={() => setPaso(2)}
              disabled={!formData.tipoCredito}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Étape 2 : Informations personnelles */}
      {paso === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Información Personal</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setPaso(1)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
              >
                Atrás
              </button>
              <button
                onClick={() => setPaso(3)}
                disabled={!formData.nombre || !formData.email || !formData.telefono}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Étape 3 : Documents */}
      {paso === 3 && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Documentos Requeridos</h2>
          <div className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <h3 className="font-medium mb-2">DNI / Pasaporte</h3>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <h3 className="font-medium mb-2">Comprobante de Ingresos</h3>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <h3 className="font-medium mb-2">Comprobante de Domicilio</h3>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setPaso(2)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
              >
                Atrás
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
              >
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SolicitudCredito
