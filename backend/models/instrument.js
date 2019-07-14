const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
	name: String,
	onFire: Boolean,
	timeFrames: [
		{
			key: String,
			name: String,
			shortcut: String,
			value: Number,
			commentary: String,
		}
	],
	fundamentals: {
		comment: String
	}
});

module.exports = mongoose.model('Instrument', instrumentSchema);