const state = {
	app: {
		showDeleteConfirmationWindow: false,
		showAddInstrumentWindow: false,
		instrumentToDeleteId: false
	}
};
const getters = {
	getDeleteConfirmationWindowStatus: state => state.app.showDeleteConfirmationWindow,
	getAddInstrumentWindow: state => state.app.showAddInstrumentWindow
};
const actions = {
	setInstrumentToDelete: ({commit}, id) => {
		commit('setInstrumentToDelete', id)
	},
	setShowDeleteConfirmationWindow: ({commit}, visible) => {
		commit('setShowDeleteConfirmationWindow', visible);
	},
	setShowAddInstrumentWindow: ({commit}, visible) => {
		console.log(visible);
		commit('setAddInstrumentWindow', visible);
	}
};
const mutations = {
	setInstrumentToDelete: (state, id) => {
		state.app.instrumentToDeleteId = id;
	},
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