<template>
	<div class="control-panel">
		<div @click="deleteAll" class="btn">Delete all</div>
		<div @click="add"class="btn">Add instrument</div>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		data: () => ({

		}),
		methods: {
			...mapActions(['saveInstruments']),
			deleteAll: function () {

			},
			add: function () {

			}
		}

	}
</script>
<style scoped>
	.control-panel {
		display: flex;
		background-color: var(--blue);
		max-width: 50%;
		margin: 0 auto;
		padding: 15px;
		justify-content: center;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.btn {
		padding: 0.5em 1em;
		cursor: pointer;
		margin-right: 15px;
		background-color: var(--yellow);
		border-radius: 3px;
	}
	.btn:last-child {
		margin-right: 0;
	}
</style>