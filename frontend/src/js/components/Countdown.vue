<template>
	<div><i class="material-icons">
		alarm
	</i>{{now}} minutes remains</div>
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
		margin-left: 35px;
		display: flex;
		align-items: center;
	}
	i {
		margin-right: 5px;
	}
</style>