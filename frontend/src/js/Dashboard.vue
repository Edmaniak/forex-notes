<template>
	<div id="dashboard">
		<div class="container">
				<v-textarea/>
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
	import VCard from './components/modals/VCard'
	import Countdown from "./components/Countdown.vue";
	import ControlPanel from "./components/ControlPanel.vue";
	import EconomicalCalendar from "./components/EconomicalCalendar.vue";
	import DeleteConfirmationWindow from "./components/modals/DeleteConfirmationWindow.vue";
	import AddInstrument from "./components/modals/AddInstrumentWindow.vue";
  import EnterTrade from "./components/modals/EnterTrade";
  import VTextarea from "./components/VTextarea";

	export default {
		data: () => ({}),
		components: {
		VTextarea,
		EnterTrade,
			AddInstrument,
			DeleteConfirmationWindow, EconomicalCalendar, ControlPanel, Countdown, ForexGrid, VCard
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

</style>