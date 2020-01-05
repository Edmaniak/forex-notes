const state = {
	app: {
		showDeleteConfirmationWindow: false,
		showAddInstrumentWindow: false,
		showEnterTradeWindow: false
	}
};
const getters = {
	getDeleteConfirmationWindowStatus: state => state.app.showDeleteConfirmationWindow,
	getAddInstrumentWindow: state => state.app.showAddInstrumentWindow,
	getEnterTradeWindow: state => state.app.showEnterTradeWindow
};
const actions = {
	setShowDeleteConfirmationWindow: ({commit}, visible) => {
		commit('setShowDeleteConfirmationWindow', visible);
	},
	setShowAddInstrumentWindow: ({commit}, visible) => {
		commit('setAddInstrumentWindow', visible);
	},
	setShowEnterTradeWindow: ({commit}, visible) => {
		commit('setShowEnterTradeWindow', visible);
	}
};
const mutations = {

	setShowDeleteConfirmationWindow: (state, visible) => {
		state.app.showDeleteConfirmationWindow = visible;
	},
	setAddInstrumentWindow: (state, visible) => {
		state.app.showAddInstrumentWindow = visible;
	},
	setShowEnterTradeWindow: (state, visible) => {
		state.app.showEnterTradeWindow = visible;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}