import React, { useState } from 'react'
import { MessageSquare, Paperclip } from 'lucide-react'

export const SeguimientoCredito = () => {
  const [codigoAcceso, setCodigoAcceso] = useState('')
  const [expediente, setExpediente] = useState(null)
  const [mensajes, setMensajes] = useState([])
  const [nuevoMensaje, setNuevoMensaje] = useState('')
  const [archivos, setArchivos] = useState([])

  // Simular verificación de código
  const verificarCodigo = () => {
    // Simulación de datos de expediente
    setExpediente({
      codigo: codigoAcceso,
      estado: 'En Proceso',
      tipo: 'Préstamo Personal',
      monto: 25000,
      fecha: '2025-02-08',
      pasos: [
        { nombre: 'Solicitud Recibida', completado: true },
        { nombre: 'Verificación de Documentos', completado: true },
        { nombre: 'Análisis de Crédito', completado: false },
        { nombre: 'Aprobación Final', completado: false }
      ]
    })
    
    // Simulación de mensajes
    setMensajes([
      {
        id: 1,
        emisor: 'Sistema',
        contenido: 'Su solicitud ha sido recibida correctamente.',
        fecha: '2025-02-08 09:00',
        archivos: []
      },
      {
        id: 2,
        emisor: 'Gestor',
        contenido: 'Necesitamos una copia adicional de su DNI.',
        fecha: '2025-02-08 10:30',
        archivos: []
      }
    ])
  }

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim() && archivos.length === 0) return

    const mensaje = {
      id: mensajes.length + 1,
      emisor: 'Usuario',
      contenido: nuevoMensaje,
      fecha: new Date().toLocaleString(),
      archivos: archivos
    }

    setMensajes([...mensajes, mensaje])
    setNuevoMensaje('')
    setArchivos([])
  }

  const manejarArchivos = (e) => {
    const files = Array.from(e.target.files)
    setArchivos(files.map(file => ({
      nombre: file.name,
      tamaño: file.size
    })))
  }

  if (!expediente) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">Seguimiento de Solicitud</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <input
              type="text"
              value={codigoAcceso}
              onChange={(e) => setCodigoAcceso(e.target.value)}
              placeholder="Ingrese su código de seguimiento"
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button
              onClick={verificarCodigo}
              disabled={!codigoAcceso}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
            >
              Consultar Estado
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Estado del expediente */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">Expediente: {expediente.codigo}</h2>
              <p className="text-gray-600">
                {expediente.tipo} - {expediente.monto.toLocaleString()}€
              </p>
            </div>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              {expediente.estado}
            </span>
          </div>

          {/* Progreso */}
          <div className="space-y-4">
            {expediente.pasos.map((paso, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-6 h-6 rounded-full ${
                  paso.completado ? 'bg-green-500' : 'bg-gray-200'
                } mr-3`} />
                <span className={paso.completado ? 'text-green-600' : 'text-gray-500'}>
                  {paso.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mensajes */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <MessageSquare className="mr-2" />
            Mensajes
          </h3>

          <div className="h-96 overflow-y-auto mb-4">
            {mensajes.map((mensaje) => (
              <div
                key={mensaje.id}
                className={`mb-4 p-4 rounded-lg ${
                  mensaje.emisor === 'Usuario' 
                    ? 'bg-green-50 ml-8' 
                    : 'bg-gray-50 mr-8'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">{mensaje.emisor}</span>
                  <span className="text-sm text-gray-500">{mensaje.fecha}</span>
                </div>
                <p className="text-gray-700">{mensaje.contenido}</p>
                {mensaje.archivos.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {mensaje.archivos.map((archivo, index) => (
                      <div key={index} className="flex items-center text-sm text-blue-600">
                        <Paperclip size={14} className="mr-1" />
                        <span>{archivo.nombre}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Nuevo mensaje */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                multiple
                onChange={manejarArchivos}
                className="hidden"
                id="adjunto"
              />
              <label
                htmlFor="adjunto"
                className="cursor-pointer inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Paperclip size={16} className="mr-2" />
                Adjuntar archivos
              </label>
            </div>

            {archivos.length > 0 && (
              <div className="space-y-1">
                {archivos.map((archivo, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Paperclip size={14} className="mr-1" />
                    <span>{archivo.nombre}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex space-x-2">
              <input
                type="text"
                value={nuevoMensaje}
                onChange={(e) => setNuevoMensaje(e.target.value)}
                placeholder="Escriba su mensaje..."
                className="flex-1 p-3 border rounded-lg"
              />
              <button
                onClick={enviarMensaje}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeguimientoCredito
