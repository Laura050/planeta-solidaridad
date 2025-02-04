const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB Atlas');
}).catch(err => {
  console.error('Error de conexión:', err);
});

// Modèle de prêt
const loanSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  name: String,
  email: String,
  status: {
    type: String,
    default: 'En revisión'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Loan = mongoose.model('Loan', loanSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenido a Planeta Solidaridad!');
});

// Créer un prêt
app.post('/api/loans', async (req, res) => {
  try {
    const { type, amount, name, email } = req.body;

    if (!type || !amount || !name || !email) {
      return res.status(400).json({
        error: 'Faltan datos obligatorios'
      });
    }

    const loan = new Loan({
      type,
      amount,
      name,
      email
    });

    await loan.save();

    res.status(201).json({
      message: 'Solicitud de préstamo creada con éxito',
      loan
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al crear el préstamo',
      details: error.message
    });
  }
});

// Obtenir un prêt par ID
app.get('/api/loans/:id', async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({
        error: 'Préstamo no encontrado'
      });
    }
    res.json({
      message: 'Detalles del préstamo',
      loan
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al buscar el préstamo',
      details: error.message
    });
  }
});

// Liste de tous les prêts
app.get('/api/loans', async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json({
      message: 'Lista de préstamos',
      loans
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener los préstamos',
      details: error.message
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
