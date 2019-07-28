const state = {
	app: {
		showDeleteConfirmationWindow: false,
		showAddInstrumentWindow: false,
	}
};
const getters = {
	getDeleteConfirmationWindowStatus: state => state.app.showDeleteConfirmationWindow,
	getAddInstrumentWindow: state => state.app.showAddInstrumentWindow
};
const actions = {

	setShowDeleteConfirmationWindow: ({commit}, visible) => {
		commit('setShowDeleteConfirmationWindow', visible);
	},
	setShowAddInstrumentWindow: ({commit}, visible) => {
		console.log(visible);
		commit('setAddInstrumentWindow', visible);
	}
};
const mutations = {

	setShowDeleteConfirmationWindow: (state, visible) => {
		state.app.showDeleteConfirmationWindow = visible;
	},
	setAddInstrumentWindow: (state, visible) => {
		state.app.showAddInstrumentWindow = visible;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}