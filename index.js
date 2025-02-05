const express = require('express');
const path = require('path');
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

// Configuration pour servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes API
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running' });
});

// Toutes nos routes existantes...
// Copier ici toutes les routes que nous avons créées précédemment

// Route pour servir l'application React en production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
