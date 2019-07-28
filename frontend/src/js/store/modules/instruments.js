import axios from 'axios'

const state = {
	instruments: [],
	instrumentToDeleteId: false,
	instrumentToDeleteIndex: false
};
const getters = {
	allInstruments: state => state.instruments,
	getArrowValue: state => (timeFrameIndex, pairIndex) => {
		return state.instruments[pairIndex][timeFrameIndex].value;
	}
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
	},
	deleteInstrument({commit,state}) {
		axios.delete(`/api/instrument/${state.instruments.instrumentToDeleteId}`)
			.then((res) => {
				commit('deleteInstrument');
				commit('setShowDeleteConfirmationWindow', false)
			})
	},
	addInstrument({commit, state}, data) {
		axios.post(`/api/instrument`, data)
			.then((res) => {
				commit('addInstrument', res.data);
				commit('setAddInstrumentWindow', false)
			})
	},
	setInstrumentToDelete: ({commit}, data) => {
		commit('setInstrumentToDelete', data)
	},

};
const mutations = {
	setInstruments: (state, instruments) => (state.instruments = instruments),
	changeArrow: (state, arrow) => {
		state.instruments[arrow.pairIndex].timeFrames[arrow.timeFrameIndex].value = arrow.value;
	},
	changeComment: (state, data) => {
		state.instruments[data.pairIndex].timeFrames[data.timeFrameIndex].comment = data.newComment;
	},
	deleteInstrument: (state) => {
		state.instruments.splice(state.instruments.instrumentToDeleteIndex, state.instruments.instrumentToDeleteIndex)
	},
	addInstrument: (state, data) => {
		state.instruments.push(data);
	},
	setInstrumentToDelete: (state, data) => {
		state.instruments.instrumentToDeleteId = data.id;
		state.instruments.instrumentToDeleteIndex = data.index
	},
};

export default {
	state,
	getters,
	actions,
	mutations
}