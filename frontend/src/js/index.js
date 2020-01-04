import '@babel/polyfill'
import Vue from 'vue';
import App from './App.vue'
import {store} from './store';
import '@fortawesome/fontawesome-free/js/all'
import VueRouter from 'vue-router'
import Dashboard from "./Dashboard";
import Situation from "./Situation";
import History from "./History";
import round from 'vue-round-filter';

Vue.use(VueRouter);
Vue.use(require('vue-script2'));

const router = new VueRouter({
	routes: [
		{path: '/', component: Dashboard},
		{path: '/situation', component: Situation},
		{path: '/history', combinator: History}
	]
});

Vue.filter('round', function (value) {
	return Math.round(value * 100) / 100;
});


new Vue({
	router,
	store,
	components: {App}
}).$mount('#main');