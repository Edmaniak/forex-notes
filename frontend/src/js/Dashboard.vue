<template>
	<div id="dashboard">
		<div class="container">
			<countdown/>
			<control-panel/>
			<forex-grid/>
			<economical-calendar/>
		</div>
		<delete-confirmation-window/>
		<add-instrument/>
		<enter-trade/>
	</div>
</template>
<script>
	import ForexGrid from "./components/ForexGrid.vue";
	import {mapGetters, mapActions} from 'vuex'
	import Countdown from "./components/Countdown.vue";
	import ControlPanel from "./components/ControlPanel.vue";
	import EconomicalCalendar from "./components/EconomicalCalendar.vue";
	import DeleteConfirmationWindow from "./components/modals/DeleteConfirmationWindow.vue";
	import AddInstrument from "./components/modals/AddInstrumentWindow.vue";
  import EnterTrade from "./components/modals/EnterTrade";

	export default {
		data: () => ({}),
		components: {
		EnterTrade,
			AddInstrument,
			DeleteConfirmationWindow, EconomicalCalendar, ControlPanel, Countdown, ForexGrid
		},
		methods: {
			...mapActions(['fetchInstruments']),
		},
		created() {
			this.fetchInstruments();
		}
	}
</script>
<style>
	.container {
		max-width: 1600px;
		margin: 0 auto;
		margin-top: 100px;
	}
</style>