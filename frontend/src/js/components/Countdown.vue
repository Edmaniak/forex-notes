<template>
	<div @click="play">
		<i class="material-icons">
		alarm
	</i>{{now}} minutes remains
	</div>
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
					const audio = new Audio('sound/notification.mp3');
					audio.play();
				}
			}, 60000)
		},
		methods: {
			play() {
				const audio = new Audio('sound/notification.mp3');
				audio.play();
			}
		}
	}
</script>
<style scoped>
	div {
		margin-left: 35px;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	i {
		margin-right: 5px;
	}
</style>