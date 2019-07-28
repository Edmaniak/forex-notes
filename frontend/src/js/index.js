import '@babel/polyfill'
import Vue from 'vue';
import Dashboard from './Dashboard.vue'
import {store} from './store';
import '@fortawesome/fontawesome-free/js/all'

Vue.use(require('vue-script2'));

new Vue({
	store,
	components: {Dashboard}
}).$mount('#main');