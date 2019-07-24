const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
	name: {
		type: String,
		required: 'Please enter a name of the instrument'
	},
	onFire: {
		type: Boolean,
		default: false
	},
	timeFrames: {
		type: Array,
		default: [
			{
				key: 'hour',
				name: '1 Hour',
				shortcut: '1H',
				value: 2,
				comment: "lorem"
			},
			{
				key: 'fourHour',
				name: '4 Hour',
				shortcut: '4H',
				value: 2,
				comment: "lorem"
			},
			{
				key: 'day',
				name: 'Day',
				shortcut: '1D',
				value: 2,
				comment: "lorem"
			},
			{
				key: 'week',
				name: 'Week',
				shortcut: '1W',
				value: 2,
				comment: "lorem"
			},
			{
				key: 'month',
				name: 'Month',
				shortcut: '1M',
				value: 2,
				comment: "lorem"
			}
		]
	},
	fundamentals: {
		comment: String
	}
});

module.exports = mongoose.model('Instrument', instrumentSchema);