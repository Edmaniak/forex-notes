<template>
	<div id="dashboard">
		<forex-grid :pairs="pairs"></forex-grid>
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