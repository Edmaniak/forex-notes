<template>
	<table class="forex-grid">
		<thead>
		<tr>
			<th>Pair</th>
			<th>1H</th>
			<th>4H</th>
			<th>Day</th>
			<th>Week</th>
			<th>Month</th>
		</tr>
		</thead>
		<tbody>
		<currency-row v-bind:key="pair.name" v-for="(pair, index) in pairs" :pairKey="index"
					  :pair="pair"></currency-row>
		</tbody>
	</table>
</template>
<script>
	import CurrencyRow from "./CurrencyRow.vue";

	export default {
		props: ['pairs'],
		data: () => ({}),
		components: {CurrencyRow}
	}
</script>
<style scoped>
	.forex-grid {
		width: 100%;
		background-color: #dedede;
		border-radius: 20px;
		padding: 15px;
	}
	th {
		padding: 15px 10px;
	}
</style>