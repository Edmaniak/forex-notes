import Vue from 'vue';
import Dashboard from './Dashboard.vue'
import {store} from './store';

new Vue({
	store,
	components: {Dashboard}
}).$mount('#main');