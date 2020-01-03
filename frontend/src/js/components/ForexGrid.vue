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
			<th></th>
		</tr>
		</thead>
		<tbody>
		<currency-row v-bind:key="pair.name" v-for="(pair, index) in allInstruments" :pairIndex="index"
					  :pair="pair"/>
		</tbody>
	</table>
</template>
<script>
	import CurrencyRow from "./InstrumentRow.vue";
  import {mapGetters} from "vuex";

	export default {
		props: ['pairs'],
	  computed: mapGetters(['allInstruments']),
		components: {CurrencyRow},
	}
</script>
<style scoped>
	.forex-grid {
		width: 100%;
		border-radius: 20px;
		border-spacing: 0 15px;
		color: #0328381;
	}
	tr {
		border-radius: 10px;
		padding-bottom: 1em;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
	}
	th {
		padding: 15px 10px;
		background-color: #d0d0d0;
	}
	th:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	th:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

</style>