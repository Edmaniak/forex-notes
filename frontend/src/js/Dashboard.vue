<template>
	<div id="dashboard">
		<div class="container">
			<countdown></countdown>
			<control-panel></control-panel>
			<forex-grid :pairs="allInstruments"></forex-grid>
			<economical-calendar></economical-calendar>
			<my-stats></my-stats>
		</div>
		<delete-confirmation-window></delete-confirmation-window>
		<add-instrument></add-instrument>
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
	import MyStats from "./components/MyStats.vue";

	export default {
		data: () => ({}),
		computed: mapGetters(['allInstruments']),
		components: {
			MyStats,
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