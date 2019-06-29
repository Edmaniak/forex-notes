<template>
	<div class="timeframe-status">
		<trend-arrow :pairKey="this.pairKey" :timeframe="timeframe"></trend-arrow>
		<clever-textarea :text="timeframe.commentary"></clever-textarea>
	</div>
</template>
<script>
	import TrendArrow from "./TrendArrow.vue";
	import CleverTextarea from "./CleverTextarea.vue";
	export default {
		props: ['timeframe', 'pairKey'],
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