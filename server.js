const axios = require('axios');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:Adik3714@cluster0-p1zzs.mongodb.net/FinancialInstrumentsData?retryWrites=true&w=majority';
const Instrument = require('./backend/models/instrument');
const BodyParser = require('body-parser');
const cors = require('cors');
const opn = require('opn');
const app = express();
// Initialization
app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.static("./frontend/dist"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
mongoose.connect(connectionString, {useNewUrlParser: true});

/**
 * Get all available instruments
 */
app.get('/api/instruments', async (request, response) => {
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
app.post('/api/instrument', async (request, response) => {
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
app.put('/api/instrument/:id', async (request, response) => {
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
app.delete('/api/instrument/:id', async (request, response) => {
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
app.delete('/api/instruments', async (request, response) => {
	try {
		const result = await Instrument.deleteMany({});
		response.send(result);
	} catch (err) {
		response.status(500).send(err);
	}
});

app.get('/api/login', async (req, res) => {
	try {
		const data = await axios.get(`https://www.myfxbook.com/api/login.json?email=${this.username}&password=${this.password}`);
		console.log(data.data);
		res.send(data.data);
	} catch(err) {
		console.log(err);
	}


});

app.listen(3000);
opn('http://localhost:3000');