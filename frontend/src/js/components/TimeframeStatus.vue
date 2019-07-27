<template>
	<div class="timeframe-status">
		<trend-arrow :time-frame="timeFrame" :time-frame-index="timeFrameIndex" :pair-index="pairIndex"></trend-arrow>
		<clever-textarea @onBlur="change" :instrument="instrument" :text="timeFrame.comment"></clever-textarea>
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
				console.log(newComment);
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