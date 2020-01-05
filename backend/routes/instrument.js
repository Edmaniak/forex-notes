const router = require('express').Router();
const Instrument = require('../../backend/models/instrument');

/**
 * Get all available instruments
 */
router.get('/api/instruments', async (request, response) => {
	try {
		const instruments = await Instrument.find().exec();
		response.send(instruments);
	} catch (err) {
		response.status(500).send(err);
	}
});

/**
 * Create new instrument
 */
router.post('/api/instrument', async (request, response) => {
	try {
		const instrument = new Instrument(request.body);
		const result = await instrument.save();
		response.send(result);
	} catch (err) {
		response.status(500).send(err);
	}
});

/**
 * Update desired instrument
 */
router.put('/api/instrument/:id', async (request, response) => {
	try {
		const instrument = await Instrument.findById(request.params.id).exec();
		instrument.set(request.body);
		const result = await instrument.save();
		response.send(result)
	} catch (err) {
		response.status(500).send(err);
	}
});

/**
 * Deleting one instrument record by id
 */
router.delete('/api/instrument/:id', async (request, response) => {
	try {
		const result = await Instrument.deleteOne({_id: request.params.id}).exec();
		response.send(result);
	} catch (err) {
		response.status(500).send(err);
	}
});

/**
 * Deleting all
 */
router.delete('/api/instruments', async (request, response) => {
	try {
		const result = await Instrument.deleteMany({});
		response.send(result);
	} catch (err) {
		response.status(500).send(err);
	}
});

module.exports = router;