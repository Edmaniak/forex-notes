<template>
	<div>
		<app-bar/>
		<router-view></router-view>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';
  import AppBar from "./components/AppBar";

	export default {
	  components: {AppBar},
	  data: () => ({}),
		methods: {
			...mapActions(['login'])
		},
		created() {
			this.login();
		}
	}
</script>