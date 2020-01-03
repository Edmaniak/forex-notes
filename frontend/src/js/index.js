import '@babel/polyfill'
import Vue from 'vue';
import App from './App.vue'
import {store} from './store';
import '@fortawesome/fontawesome-free/js/all'
import VueRouter from 'vue-router'
import Dashboard from "./Dashboard";
import Situation from "./Situation";
import History from "./History";

Vue.use(VueRouter);
Vue.use(require('vue-script2'));

const router = new VueRouter({
	routes: [
		{path: '/', component: Dashboard},
		{path: '/situation', component: Situation},
		{path: '/history', combinator: History}
	]
});


new Vue({
	store,
	components: {App}
}).$mount('#main');