import Vuex from 'vuex'
import Vue from 'vue';
import instruments from './modules/instruments';
import app from './modules/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		instruments,
		app
	}
});