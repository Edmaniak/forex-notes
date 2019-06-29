const state = {
	instruments: [
		{
			name: "EUR/USD",
			onFire: true,
			timeFrames: {
				hour: {
					key: 'hour',
					value: 2,
					commentary: "lorem"
				},
				fourHour: {
					key: 'fourHour',
					value: 2,
					commentary: "lorem"
				},
				day: {
					key: 'day',
					value: 2,
					commentary: "lorem"
				},
				week: {
					key: 'week',
					value: 2,
					commentary: "lorem"
				},
				month: {
					key: 'month',
					value: 2,
					commentary: "lorem"
				}
			},
			fundamentals: {
				comment: "Lorem"
			}
		},
		{
			name: "AUS/USD",
			onFire: false,
			timeFrames: {
				hour: {
					key: 'hour',
					value: 1,
					commentary: "lorem"
				},
				fourHour: {
					key: 'fourHour',
					value: 1,
					commentary: "lorem"
				},
				day: {
					key: 'day',
					value: 0,
					commentary: "lorem"
				},
				week: {
					key: 'week',
					value: 1,
					commentary: "lorem"
				},
				month: {
					key: 'month',
					value: 1,
					commentary: "lorem"
				}
			},
			fundamentals: {
				comment: "Lorem"
			}
		}
	]
};
const getters = {
	allInstruments: state => state.instruments
};
const actions = {
	refreshArrows({commit}, arrow) {
		commit('changeArrow', arrow);
	}
};
const mutations = {
	changeArrow: (state, arrow) => {
		state.instruments[arrow.key].timeFrames[arrow.timeFrame].value = arrow.value;}
};

export default {
	state,
	getters,
	actions,
	mutations
}