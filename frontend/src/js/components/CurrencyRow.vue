<template>
	<tr>
		<td class="pair">{{pair.name}}</td>
		<td><timeframe-status></timeframe-status></td>
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