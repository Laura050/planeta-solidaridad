import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Star, Paperclip, CheckCircle, XCircle } from 'lucide-react'

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('solicitudes')
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null)
  const [nuevoMensaje, setNuevoMensaje] = useState('')
  const [archivosAdjuntos, setArchivosAdjuntos] = useState([])

  // Simulacion de datos
  const [solicitudes, setSolicitudes] = useState([
    {
      id: '1',
      codigo: 'SOL001',
      fecha: '2025-02-08',
      estado: 'pendiente',
      nombre: 'Juan Pérez',
      tipoCredito: 'personal',
      monto: 50000,
      documentos: ['dni.pdf', 'ingresos.pdf']
    },
    {
      id: '2',
      codigo: 'SOL002',
      fecha: '2025-02-07',
      estado: 'pendiente',
      nombre: 'María García',
      tipoCredito: 'inmobiliario',
      monto: 150000,
      documentos: ['dni.pdf', 'nominas.pdf', 'contrato.pdf']
    }
  ])

  const [testimoniosPendientes, setTestimoniosPendientes] = useState([
    {
      id: 't1',
      nombre: 'Roberto Sánchez',
      fecha: '2025-02-08',
      calificacion: 5,
      comentario: 'Excelente servicio, muy rápido y eficiente.',
      estado: 'pendiente'
    },
    {
      id: 't2',
      nombre: 'Ana López',
      fecha: '2025-02-07',
      calificacion: 4,
      comentario: 'Muy buena atención al cliente.',
      estado: 'pendiente'
    }
  ])

  const [mensajes, setMensajes] = useState([])

  // Funciones de gestion
  const actualizarEstadoSolicitud = (codigo, nuevoEstado) => {
    setSolicitudes(solicitudes.map(sol => 
      sol.codigo === codigo ? {...sol, estado: nuevoEstado} : sol
    ))
  }

  const gestionarTestimonio = (id, accion) => {
    setTestimoniosPendientes(testimoniosPendientes.filter(t => t.id !== id))
  }

  const seleccionarSolicitud = (solicitud) => {
    setSolicitudSeleccionada(solicitud)
    // Simulacion de carga de mensajes
    setMensajes([
      {
        id: 1,
        emisor: 'Sistema',
        contenido: 'Solicitud recibida',
        fecha: solicitud.fecha,
        archivos: []
      }
    ])
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setArchivosAdjuntos(files.map(file => ({
      nombre: file.name,
      tipo: file.type,
      tamaño: file.size
    })))
  }

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim() && archivosAdjuntos.length === 0) return

    const mensaje = {
      id: Date.now(),
      emisor: 'Admin',
      contenido: nuevoMensaje,
      fecha: new Date().toISOString(),
      archivos: archivosAdjuntos
    }

    setMensajes([...mensajes, mensaje])
    setNuevoMensaje('')
    setArchivosAdjuntos([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="solicitudes">Solicitudes</TabsTrigger>
          <TabsTrigger value="testimonios">Testimonios Pendientes</TabsTrigger>
        </TabsList>

        <TabsContent value="solicitudes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lista de Solicitudes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Solicitudes de Préstamo</h2>
                <div className="space-y-4">
                  {solicitudes.map((solicitud) => (
                    <div
                      key={solicitud.id}
                      className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => seleccionarSolicitud(solicitud)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">Código: {solicitud.codigo}</p>
                          <p className="text-sm text-gray-600">{solicitud.nombre}</p>
                          <p className="text-sm text-gray-600">
                            {solicitud.tipoCredito} - {solicitud.monto.toLocaleString()}€
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          solicitud.estado === 'aprobado' ? 'bg-green-100 text-green-800' :
                          solicitud.estado === 'rechazado' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {solicitud.estado.charAt(0).toUpperCase() + solicitud.estado.slice(1)}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            actualizarEstadoSolicitud(solicitud.codigo, 'aprobado')
                          }}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                        >
                          Aprobar
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            actualizarEstadoSolicitud(solicitud.codigo, 'rechazado')
                          }}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
                        >
                          Rechazar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Détails et Messages */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">
                  {solicitudSeleccionada ? 
                    `Detalles - ${solicitudSeleccionada.codigo}` : 
                    'Seleccione una solicitud'}
                </h2>

                {solicitudSeleccionada && (
                  <div className="space-y-6">
                    {/* Détails de la demande */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold mb-2">Información del Solicitante</h3>
                      <p><strong>Nombre:</strong> {solicitudSeleccionada.nombre}</p>
                      <p><strong>Tipo de Crédito:</strong> {solicitudSeleccionada.tipoCredito}</p>
                      <p><strong>Monto:</strong> {solicitudSeleccionada.monto.toLocaleString()}€</p>
                      <div className="mt-2">
                        <strong>Documentos:</strong>
                        <ul className="mt-1">
                          {solicitudSeleccionada.documentos.map((doc, index) => (
                            <li key={index} className="text-sm text-blue-600 flex items-center">
                              <Paperclip size={14} className="mr-1" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Messages */}
                    <div>
                      <h3 className="font-bold mb-2">Mensajes</h3>
                      <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4">
                        {mensajes.map((mensaje) => (
                          <div
                            key={mensaje.id}
                            className={`mb-4 p-3 rounded-lg ${
                              mensaje.emisor === 'Admin' 
                                ? 'bg-blue-50 ml-8' 
                                : 'bg-gray-50 mr-8'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-bold">{mensaje.emisor}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(mensaje.fecha).toLocaleString()}
                              </span>
                            </div>
                            <p>{mensaje.contenido}</p>
                            {mensaje.archivos?.length > 0 && (
                              <div className="mt-2">
                                {mensaje.archivos.map((archivo, index) => (
                                  <div key={index} className="text-sm text-blue-600 flex items-center">
                                    <Paperclip size={14} className="mr-1" />
                                    {archivo.nombre}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Nouveau message */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                            id="archivo-admin"
                          />
                          <label
                            htmlFor="archivo-admin"
                            className="cursor-pointer inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <Paperclip size={16} className="mr-2" />
                            Adjuntar archivos
                          </label>
                        </div>

                        {archivosAdjuntos.length > 0 && (
                          <div className="space-y-1">
                            {archivosAdjuntos.map((archivo, index) => (
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
                            placeholder="Escriba un mensaje..."
                            className="flex-1 p-2 border rounded-lg"
                          />
                          <button
                            onClick={enviarMensaje}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="testimonios">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Testimonios Pendientes</h2>
              <div className="space-y-4">
                {testimoniosPendientes.map((testimonio) => (
                  <div key={testimonio.id} className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-bold">{testimonio.nombre}</p>
                        <div className="flex space-x-1">
                          {Array.from({ length: testimonio.calificacion }).map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(testimonio.fecha).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 my-2">{testimonio.comentario}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => gestionarTestimonio(testimonio.id, 'aprobar')}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                      >
                        <CheckCircle size={16} className="inline-block mr-1" />
                        Aprobar
                      </button>
                      <button
                        onClick={() => gestionarTestimonio(testimonio.id, 'rechazar')}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
                      >
                        <XCircle size={16} className="inline-block mr-1" />
                        Rechazar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
