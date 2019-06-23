<template>
	<div id="dashboard">
		<div class="container">
			<forex-grid :pairs="pairs"></forex-grid>
		</div>
	</div>
</template>
<script>
	import ForexGrid from "./components/ForexGrid.vue";
	import Data from './data/testData'

	export default {
		data: () => ({
			pairs: Data.pairs
		}),
		components: {ForexGrid},
	}
</script>
<style>
	.container {
		max-width: 1600px;
		margin: 0 auto;
	}
</style>