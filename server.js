const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:Adik3714@cluster0-p1zzs.mongodb.net/FinancialInstrumentsData?retryWrites=true&w=majority';
const Instrument = require('./backend/models/instrument');

app.use(express.static("./frontend/dist"));

app.get('/', function (req, res) {

	/*mongoose.connect(connectionString, {useNewUrlParser: true})
		.catch(err => console.log(err))
		.then(con => console.log(con));

	const eurusd = new Instrument({
		name: "EUR/USD",
		onFire: true,
		timeFrames: [
			{
				key: 'hour',
				name: '',
				shortcut: '1H',
				value: 1,
				commentary: 'Lorem ipsum'
			}
		]
	});

	console.log(eurusd);

	eurusd.save().then((es) => console.log("success")).catch((err) => console.log(err));*/

});

app.listen(3000);