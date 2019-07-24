import axios from 'axios'

const state = {
	instruments: []
};
const getters = {
	allInstruments: state => state.instruments
};
const actions = {
	async fetchInstruments({commit}) {
		const response = await axios.get('/api/instruments');
		commit('setInstruments', response.data);
	},
	refreshArrows({commit}, arrow) {
		commit('changeArrow', arrow);
	},
	async saveInstrument({commit}, instrument) {
		const response = await axios.post(`/api/instrument${instrument._id}`, instrument);
		//commit('setInstrument', instrument);
		console.log(response)
	}
};
const mutations = {
	setInstruments: (state, instruments) => (state.instruments = instruments),
	changeArrow: (state, arrow) => {
		state.instruments[arrow.pairIndex].timeFrames[arrow.timeFrameIndex].value = arrow.value;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}