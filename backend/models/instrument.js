const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
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