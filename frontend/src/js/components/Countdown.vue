<template>
	<div>{{now}} minutes remains</div>
</template>
<script>
	export default {
		data: () => ({
			now: 60 - new Date().getMinutes()
		}),
		mounted() {
			window.setInterval(() => {
				this.now = 60 - new Date().getMinutes();
			},60000)
		}
	}
</script>
<style scoped>
	div {
		text-align: center;
		font-size: 32px;
		font-weight: bold;
		margin-bottom: 60px;
	}
</style>