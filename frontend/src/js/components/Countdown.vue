<template>
	<div><img src="img/clock.svg" alt="">{{now}} minutes remains</div>
</template>
<script>
	export default {
		data: () => ({
			now: 60 - new Date().getMinutes()
		}),
		mounted() {
			window.setInterval(() => {
				this.now = 60 - new Date().getMinutes();
				if (this.now === 0) {
					const audio = new Audio('dist/sound/notification.mp3');
					audio.play();
				}
			}, 60000)
		}
	}
</script>
<style scoped>
	div {
		text-align: center;
		font-size: 32px;
		font-weight: bold;
		margin: 0 auto 60px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	img {
		width: 28px;
		margin-right: 15px;
	}
</style>