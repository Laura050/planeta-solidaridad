import React, { useState } from 'react'

export const SolicitudCredito = () => {
  const [paso, setPaso] = useState(1)
  const [formData, setFormData] = useState({
    tipoCredito: '',
    monto: '',
    plazo: '',
    nombre: '',
    email: '',
    telefono: '',
    dni: '',
    direccion: '',
    documentos: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData({
      ...formData,
      documentos: [...formData.documentos, ...files]
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Barra de progreso */}
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

      {/* Paso 1: Tipo de Crédito */}
      {paso === 1 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Seleccione el Tipo de Crédito</h2>
          <div className="space-y-4">
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
              <option value="refinanciamiento">Refinanciamiento</option>
            </select>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Monto solicitado (€)</label>
                <input
                  type="number"
                  name="monto"
                  value={formData.monto}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Ingrese el monto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Plazo (meses)</label>
                <input
                  type="number"
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Ingrese el plazo"
                />
              </div>
            </div>

            <button
              onClick={() => setPaso(2)}
              disabled={!formData.tipoCredito || !formData.monto || !formData.plazo}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Paso 2: Información Personal */}
      {paso === 2 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Información Personal</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Nombre completo"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Correo electrónico"
            />
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Teléfono"
            />
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="DNI/NIE"
            />
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Dirección"
            />

            <div className="flex space-x-4">
              <button
                onClick={() => setPaso(1)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
              >
                Atrás
              </button>
              <button
                onClick={() => setPaso(3)}
                disabled={!formData.nombre || !formData.email || !formData.telefono || !formData.dni || !formData.direccion}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Paso 3: Documentos */}
      {paso === 3 && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Documentos Requeridos</h2>
          <div className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-6">
              <h3 className="font-medium mb-2">DNI/NIE (ambas caras)</h3>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-green-50 file:text-green-700
                          hover:file:bg-green-100"
              />
            </div>

            <div className="border-2 border-dashed rounded-lg p-6">
              <h3 className="font-medium mb-2">Comprobante de Ingresos</h3>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-green-50 file:text-green-700
                          hover:file:bg-green-100"
              />
            </div>

            <div className="border-2 border-dashed rounded-lg p-6">
              <h3 className="font-medium mb-2">Comprobante de Domicilio</h3>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-green-50 file:text-green-700
                          hover:file:bg-green-100"
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
                onClick={() => {
                  // Aquí iría la lógica para enviar la solicitud
                  alert('Solicitud enviada con éxito')
                }}
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
