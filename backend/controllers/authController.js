const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Crea este modelo si no existe

exports.register = async (req, res) => {
  try {
    const { nombre, apellidoPaterno, apellidoMaterno, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'El correo ya está registrado' });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      nombre,
      apellidoPaterno,
      apellidoMaterno: apellidoMaterno || '',
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.status(201).json({
      token,
      user: { id: savedUser._id, nombre: savedUser.nombre, email: savedUser.email }
    });

  } catch (error) {
    console.error('🔥 Error en registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, user: { id: user._id, nombre: user.nombre, email: user.email } });

  } catch (error) {
    console.error('🔥 Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};