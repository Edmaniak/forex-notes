<template>
	<tr>
		<td class="pair">
			<div>
				<summary-trend-arrow :values="pair.timeFrames"></summary-trend-arrow>
				<span>{{pair.name}}</span>
			</div>
		</td>
		<td>
			<timeframe-status :pairKey="this.pairKey" :timeframe="pair.timeFrames.hour"></timeframe-status>
		</td>
		<td>
			<timeframe-status :pairKey="this.pairKey" :timeframe="pair.timeFrames.fourHour"></timeframe-status>
		</td>
		<td>
			<timeframe-status :pairKey="this.pairKey" :timeframe="pair.timeFrames.day"></timeframe-status>
		</td>
		<td>
			<timeframe-status :pairKey="this.pairKey" :timeframe="pair.timeFrames.week"></timeframe-status>
		</td>
		<td>
			<timeframe-status :pairKey="this.pairKey" :timeframe="pair.timeFrames.month"></timeframe-status>
		</td>
	</tr>
</template>
<script>
	import TimeframeStatus from "./TimeframeStatus.vue";
	import TrendArrow from "./TrendArrow.vue";
	import SummaryTrendArrow from "./SummaryTrendArrow.vue";

	export default {
		components: {SummaryTrendArrow, TrendArrow, TimeframeStatus},
		props: ['pair', 'pairKey'],
		data: () => ({}),
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