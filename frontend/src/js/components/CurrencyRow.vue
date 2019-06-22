<template>
	<tr>
		<td class="pair">{{pair.name}}</td>
		<td><timeframe-status :timeframe="pair.timeFrames.hour"></timeframe-status></td>
		<td><timeframe-status :timeframe="pair.timeFrames.day"></timeframe-status></td>
		<td><timeframe-status :timeframe="pair.timeFrames.week"></timeframe-status></td>
		<td><timeframe-status :timeframe="pair.timeFrames.month"></timeframe-status></td>
	</tr>
</template>
<script>
	import TimeframeStatus from "./TimeframeStatus.vue";

	export default {
		components: {TimeframeStatus},
		props: ['pair'],
		data: () => ({
		})
	}
</script>