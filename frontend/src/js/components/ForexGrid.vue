<template>
	<table class="forex-grid">
		<thead>
		<tr>
			<th>Pair</th>
			<th>1H</th>
			<th>Day</th>
			<th>Week</th>
			<th>Month</th>
		</tr>
		</thead>
		<tbody>
		<currency-row v-bind:key="pair.name" v-for="pair in pairs" :pair="pair"></currency-row>
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
<style>
	.forex-grid {
		width: 100%;
	}
</style>