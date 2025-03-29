require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configuración de Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas
app.use('/api/auth', require('./routes/authRoutes')); // Nueva ruta de autenticación
app.use('/api/buses', require('./routes/buses'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚍 ¡API de Transporte Público Operativa!');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('🚨 Error crítico:', err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor operativo en puerto ${PORT}`);
});