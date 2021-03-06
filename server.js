const axios = require('axios');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:Adik3714@cluster0-p1zzs.mongodb.net/FinancialInstrumentsData?retryWrites=true&w=majority';

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
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', require('./backend/routes/instrument'));

app.get('/api/login/:email/:password', async (req, res) => {
	try {
		const {email, password} = req.params;
		const data = await axios.get(`https://www.myfxbook.com/api/login.json?email=${email}&password=${password}`);
		res.send(data.data);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/account/:sessionId', async (req, res) => {
	try {
		const {sessionId} = req.params;
		const data = await axios.get(`https://www.myfxbook.com/api/get-my-accounts.json?session=${sessionId}`);
		res.send(data.data);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/openTrades/:sessionId/:accountId', async (req, res) => {
	try {
		const {sessionId, accountId} = req.params;
		const data = await axios.get(`https://www.myfxbook.com/api/get-open-trades.json?session=${sessionId}&id=${accountId}`);
		res.send(data.data);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/history/:sessionId/:accountId', async (req, res) => {
	try {
		const {sessionId, accountId} = req.params;
		const data = await axios.get(`https://www.myfxbook.com/api/get-history.json?session=${sessionId}&id=${accountId}`);
		res.send(data.data);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/history/:sessionId/:accountId', async (req, res) => {
	try {
		const {sessionId, accountId} = req.params;
		const data = await axios.get(`https://www.myfxbook.com/api/get-history.json?session=${sessionId}&id=${accountId}`);
		res.send(data.data);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/rate', async (req, res) => {
	try {
		const data = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=CZK`);
		console.log(data.data);
		res.send(data.data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

app.listen(3000);
//opn('http://localhost:3000');