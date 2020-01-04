import axios from 'axios';
import Cookies from 'js-cookie'

const state = {
	sessionId: Cookies.get('sessionId') ? Cookies.get('sessionId') : '',
	accountId: '',
	accounts: [],
	activeAccount: {},
	openOrders: [],
	history: [],
	dailyGain: []
};

const actions = {
	async login({commit, state}) {
		if (!state.sessionId) {
			const data = await axios.get('/api/login/adam.ouhrabka@gmail.com/Adik3714');
			commit('setSessionId', data.data.session);
		}
		if (!state.accountId) {
			const data = await axios.get(`/api/account/${state.sessionId}`);
			console.log(data);
			commit('setAccountId', data.data.accounts[0].id);
			commit('setAccounts', data.data.accounts);
		}
	},
	setActiveAccount({commit, state}, orderAccountId) {
		if (state.accounts[orderAccountId]) {
			commit('setAccountId', state.accounts[orderAccountId].id);
			commit('setActiveAccount', state.accounts[orderAccountId])
		}
	},
	async getOpenOrders() {

	},
	async getHistory() {

	},
	async getDailyGain() {

	}
};

const mutations = {
	setSessionId(state, sessionId) {
		state.sessionId = sessionId;
		Cookies.set('sessionId', sessionId)
	},
	setAccountId(state, accountId) {
		state.accountId = accountId
	},
	setAccounts(state, accounts) {
		state.accounts = accounts;
		state.activeAccount = accounts[0];
	},
	setActiveAccount(state, account) {
		state.activeAccount = account;
	}
};

const getters = {};

export default {
	state,
	actions,
	mutations,
	getters
}