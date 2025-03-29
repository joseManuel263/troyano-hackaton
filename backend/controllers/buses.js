const Bus = require('../models/Bus');

exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener buses' });
  }
};

exports.updateBusLocation = async (req, res) => {
  try {
    const { plate } = req.params;
    const { lng, lat } = req.body;

    if (!lng || !lat || isNaN(lng) || isNaN(lat)) {
      return res.status(400).json({ error: 'Coordenadas inválidas' });
    }

    const updatedBus = await Bus.findOneAndUpdate(
      { plate },
      { lastPosition: { type: 'Point', coordinates: [lng, lat] }},
      { new: true, upsert: true }
    );

    res.json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar ubicación' });
  }
};

exports.getNearbyBuses = async (req, res) => {
  try {
    const { lng, lat, maxDistance = 1000 } = req.query;
    const buses = await Bus.find({
      lastPosition: {
        $near: {
          $geometry: { 
            type: 'Point', 
            coordinates: [parseFloat(lng), parseFloat(lat)] 
          },
          $maxDistance: parseFloat(maxDistance)
        }
      }
    });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar buses cercanos' });
  }
};