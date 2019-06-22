<template>
	<div class="timeframe-status">
		<trend-arrow :value="timeframe.value"></trend-arrow>
		<clever-textarea :text="timeframe.commentary"></clever-textarea>
	</div>
</template>
<script>
	import TrendArrow from "./TrendArrow.vue";
	import CleverTextarea from "./CleverTextarea.vue";
	export default {
		props: ['timeframe'],
		components: {CleverTextarea, TrendArrow},
		data: () => ({

		})
	}
</script>