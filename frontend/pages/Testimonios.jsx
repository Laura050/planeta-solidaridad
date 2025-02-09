import React, { useState } from 'react'
import { Star } from 'lucide-react'

export const Testimonios = () => {
  const [showForm, setShowForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [testimonio, setTestimonio] = useState({
    nombre: '',
    comentario: ''
  })

  // Liste des témoignages (simulation de données)
  const [testimonios] = useState([
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      comentario: "Excelente servicio, el proceso fue muy rápido y transparente. Me ayudaron a financiar mi casa.",
      fecha: "2025-01-15",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 2,
      nombre: "María González",
      comentario: "Me ayudaron a conseguir el préstamo para mi negocio en tiempo récord. Muy satisfecha con el servicio.",
      fecha: "2024-12-10",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 3,
      nombre: "Juan Pérez",
      comentario: "Muy profesionales y atentos en todo momento. El proceso fue simple y rápido.",
      fecha: "2024-11-05",
      calificacion: 4,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      comentario: "Gracias a Planeta Solidaridad pude financiar mis estudios de maestría. ¡Excelente atención!",
      fecha: "2024-09-20",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 5,
      nombre: "Roberto Sánchez",
      comentario: "El mejor servicio de préstamos que he encontrado. Las tasas son muy competitivas.",
      fecha: "2024-07-15",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 6,
      nombre: "Laura Fernández",
      comentario: "Me ayudaron en un momento difícil con un préstamo personal. Muy agradecida.",
      fecha: "2024-01-25",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 7,
      nombre: "Pedro Ramírez",
      comentario: "El proceso de solicitud fue muy rápido y la aprobación también. Recomendado.",
      fecha: "2023-11-18",
      calificacion: 4,
      foto: "/api/placeholder/50/50"
    },
    {
      id: 8,
      nombre: "Isabel Moreno",
      comentario: "Conseguí el préstamo para mi pequeño negocio. Las cuotas son muy accesibles.",
      fecha: "2023-09-05",
      calificacion: 5,
      foto: "/api/placeholder/50/50"
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici irait la logique pour soumettre le témoignage
    setShowForm(false)
    setRating(0)
    setTestimonio({ nombre: '', comentario: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Testimonios de Clientes</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Dejar Testimonio
          </button>
        </div>

        {/* Formulaire Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Nuevo Testimonio</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Su nombre
                  </label>
                  <input
                    type="text"
                    value={testimonio.nombre}
                    onChange={(e) => setTestimonio({...testimonio, nombre: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Calificación
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className={`cursor-pointer ${
                          star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Su comentario
                  </label>
                  <textarea
                    value={testimonio.comentario}
                    onChange={(e) => setTestimonio({...testimonio, comentario: e.target.value})}
                    className="w-full p-2 border rounded-lg h-32"
                    required
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Liste des témoignages */}
        <div className="grid gap-6">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <img
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">{testimonio.nombre}</h3>
                      <div className="flex space-x-1">
                        {[...Array(testimonio.calificacion)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(testimonio.fecha).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600">{testimonio.comentario}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonios
