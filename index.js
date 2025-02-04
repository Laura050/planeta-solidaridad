const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenido a Planeta Solidaridad!');
});

// Route de test pour les prêts
app.get('/api/loans', (req, res) => {
  res.json({
    message: 'Lista de préstamos',
    loans: [
      {
        id: 1,
        type: 'Personal',
        amount: 5000,
        status: 'En revisión'
      },
      {
        id: 2,
        type: 'Hipotecario',
        amount: 150000,
        status: 'Aprobado'
      }
    ]
  });
});
// Route pour créer une nouvelle demande de prêt
app.post('/api/loans', (req, res) => {
  // Récupérer les données envoyées
  const { type, amount, name, email } = req.body;

  // Vérifier que toutes les données nécessaires sont présentes
  if (!type || !amount || !name || !email) {
    return res.status(400).json({
      error: 'Faltan datos obligatorios'
    });
  }

  // Simuler la création d'une demande
  const newLoan = {
    id: Date.now(),
    type,
    amount,
    name,
    email,
    status: 'En revisión',
    createdAt: new Date()
  };

  res.status(201).json({
    message: 'Solicitud de préstamo creada con éxito',
    loan: newLoan
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
