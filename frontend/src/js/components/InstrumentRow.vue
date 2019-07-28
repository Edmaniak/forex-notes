<template>
	<tr>
		<td class="pair">
			<div>
				<summary-trend-arrow :timeFrames="pair.timeFrames"></summary-trend-arrow>
				<span>{{pair.name}}</span>
			</div>
		</td>
		<td v-for="(timeFrame, timeFrameIndex) in this.pair.timeFrames">
			<timeframe-status :instrument="pair" :pair-index="pairIndex" :time-frame="timeFrame"
							  :time-frame-index="timeFrameIndex"></timeframe-status>
		</td>
		<td>
			<div @click="deleteIt">
				<i  class="fas fa-times"></i>
			</div>
		</td>
	</tr>
</template>
<script>
	import TimeframeStatus from "./TimeframeStatus.vue";
	import TrendArrow from "./TrendArrow.vue";
	import SummaryTrendArrow from "./SummaryTrendArrow.vue";
	import {mapActions} from 'vuex';

	export default {
		components: {SummaryTrendArrow, TrendArrow, TimeframeStatus},
		props: ['pair', 'pairIndex'],
		data: () => ({}),
		created() {
			console.log(this.pair.timeFrames)
		},
		methods: {
			...mapActions(['setInstrumentToDelete', 'setShowDeleteConfirmationWindow']),
			deleteIt: function () {
				this.setInstrumentToDelete({id:this.pair._id, index: this.pairIndex});
				this.setShowDeleteConfirmationWindow(true)
			}
		}
	}
</script>
<style scoped>
	td > div {
		display: flex;
		align-items: center;
	}

	td {
		padding: 15px 10px;
	}
</style>