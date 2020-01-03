<template>
	<router-view></router-view>
</template>
<script>
	import {mapActions} from 'vuex';

	export default {
		data: () => ({}),
		methods: {
			...mapActions(['login'])
		},
		created() {
			this.login();
		}
	}
</script>