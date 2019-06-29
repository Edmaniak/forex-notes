<template>
	<div id="dashboard">
		<div class="container">
			<forex-grid :pairs="allInstruments"></forex-grid>
		</div>
	</div>
</template>
<script>
	import ForexGrid from "./components/ForexGrid.vue";
	import {mapGetters} from 'vuex'
	export default {
		data: () => ({
		}),
		computed: mapGetters(['allInstruments']),
		components: {ForexGrid},
	}
</script>
<style>
	.container {
		max-width: 1600px;
		margin: 0 auto;
		margin-top: 100px;
	}
</style>