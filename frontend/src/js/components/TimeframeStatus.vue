<template>
	<div class="timeframe-status">
		<trend-arrow :time-frame="timeFrame" :time-frame-index="timeFrameIndex" :pair-index="pairIndex"></trend-arrow>
		<clever-textarea :text="timeFrame.comment"></clever-textarea>
	</div>
</template>
<script>
	import TrendArrow from "./TrendArrow.vue";
	import CleverTextarea from "./CleverTextarea.vue";
	export default {
		props: ['timeFrame', 'timeFrameIndex', 'pairIndex'],
		components: {CleverTextarea, TrendArrow},
		data: () => ({

		}),

	}
</script>
<style>
	.timeframe-status {
		display: flex;
		align-items: center;
	}
</style>