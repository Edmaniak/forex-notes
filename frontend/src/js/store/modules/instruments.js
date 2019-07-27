import axios from 'axios'

const state = {
	instruments: [],
	app: {}
};
const getters = {
	allInstruments: state => state.instruments
};
const actions = {
	async fetchInstruments({commit}) {
		const response = await axios.get('/api/instruments');
		commit('setInstruments', response.data);
	},
	refreshArrows({commit, state}, arrow) {
		commit('changeArrow', arrow);
		axios.put(`/api/instrument/${state.instruments[arrow.pairIndex]._id}`, state.instruments[arrow.pairIndex])
	},
	changeComment({commit, state}, data) {
		commit('changeComment', data);
		axios.put(`/api/instrument/${state.instruments[data.pairIndex]._id}`, state.instruments[data.pairIndex]);
	}
};
const mutations = {
	setInstruments: (state, instruments) => (state.instruments = instruments),
	changeArrow: (state, arrow) => {
		state.instruments[arrow.pairIndex].timeFrames[arrow.timeFrameIndex].value = arrow.value;
	},
	changeComment: (state, data) => {
		state.instruments[data.pairIndex].timeFrames[data.timeFrameIndex].comment = data.newComment;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}