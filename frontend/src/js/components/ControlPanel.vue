<template>
	<div class="control-panel">
		<app-button @onClick="func" class="btn">+</app-button>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	import AppButton from "./AppButton.vue";
	export default {
		components: {AppButton},
		data: () => ({

		}),
		methods: {
			...mapActions(['setShowAddInstrumentWindow']),
			func: function () {
				console.log("FD");
				this.setShowAddInstrumentWindow(true)
			}
		}
	}
</script>
<style scoped>
	.control-panel {
		display: flex;
		max-width: 50%;
		margin: 0 auto;
		padding: 15px;
		justify-content: center;

		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.btn:last-child {
		margin-right: 0;
	}
</style>