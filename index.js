const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:Adik3714@cluster0-p1zzs.mongodb.net/test?retryWrites=true&w=majority';


app.get('/', function (req, res) {
	mongoose.connect(connectionString, {useNewUrlParser: true})
		.catch(err => console.log(err))
		.then(con => console.log(con))
});

app.listen(3000);