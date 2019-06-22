<template>
	<table class="forex-grid">
		<thead></thead>
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