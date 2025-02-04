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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
