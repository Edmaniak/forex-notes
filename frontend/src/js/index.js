import '@babel/polyfill'
import Vue from 'vue';
import Dashboard from './Dashboard.vue'
import {store} from './store';

Vue.use(require('vue-script2'));

new Vue({
	store,
	components: {Dashboard}
}).$mount('#main');