<template>
	<tr>
		<td class="pair">
			<div>
				<trend-arrow></trend-arrow>
				<span>{{pair.name}}</span>
			</div>
		</td>
		<td>
			<timeframe-status :timeframe="pair.timeFrames.hour"></timeframe-status>
		</td>
		<td>
			<timeframe-status :timeframe="pair.timeFrames.day"></timeframe-status>
		</td>
		<td>
			<timeframe-status :timeframe="pair.timeFrames.week"></timeframe-status>
		</td>
		<td>
			<timeframe-status :timeframe="pair.timeFrames.month"></timeframe-status>
		</td>
	</tr>
</template>
<script>
	import TimeframeStatus from "./TimeframeStatus.vue";
	import TrendArrow from "./TrendArrow.vue";

	export default {
		components: {TrendArrow, TimeframeStatus},
		props: ['pair'],
		data: () => ({})
	}
</script>
<style>
	td > div {
		display: flex;
		align-items: center;
	}
</style>