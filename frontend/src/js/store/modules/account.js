const state = {
	sessionId: '',
	accountId: '',
	accounts: [],
	openOrders: [],
	history: [],
	dailyGain: []
}

const actions = {
	async login() {
		const data = await axios.get('/api/login/adam.ouhrabka@gmail.com/Adik3714');
		console.log(data);
	},
	async getAccount() {

	},
	async getOpenOrders() {

	},
	async getHistory() {

	},
	async getDailyGain() {

	}
}

const mutations = {

}

const getters = {

}

export default {
	state,
	actions,
	mutations,
	getters
}