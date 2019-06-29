import Vuex from 'vuex'
import Vue from 'vue';
import instruments from './modules/instruments';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		instruments
	}
});