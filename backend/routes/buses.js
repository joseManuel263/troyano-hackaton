const express = require('express');
const router = express.Router();
const { getBuses, updateBusLocation, getNearbyBuses } = require('../controllers/buses');

router.get('/', getBuses);
router.post('/:plate/location', updateBusLocation);
router.get('/nearby', getNearbyBuses);

module.exports = router;