<template>
	<div class="timeframe-status">
		<trend-arrow :time-frame="timeFrame" :time-frame-index="timeFrameIndex" :pair-index="pairIndex"/>
		<clever-textarea @onBlur="change" :time-frame="timeFrame" :instrument="instrument" :text="timeFrame.comment"/>
	</div>
</template>
<script>
	import TrendArrow from "./TrendArrow.vue";
	import CleverTextarea from "./CleverTextarea.vue";
	import {mapActions} from 'vuex';

	export default {
		props: ['timeFrame', 'timeFrameIndex', 'pairIndex', 'instrument'],
		components: {CleverTextarea, TrendArrow},
		data: () => ({}),
		methods: {
			...mapActions(['changeComment']),
			change: function (newComment) {
				this.changeComment({
					timeFrameIndex: this.timeFrameIndex,
					pairIndex: this.pairIndex,
					newComment
				})
			}
		}

	}
</script>
<style>
	.timeframe-status {
		display: flex;
		align-items: center;
	}
</style>