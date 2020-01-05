<template>
	<div class="control-panel">
		<app-circle-button icon="add" @onClick="setShowAddInstrumentWindow(true)"/>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	import AppButton from "./AppButton.vue";
  import AppCircleButton from "./AppCircleButton";
	export default {
		components: {AppCircleButton, AppButton},
		methods: {
			...mapActions(['setShowAddInstrumentWindow'])
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