<template>
	<div class="control-panel">
		<div class="btn">Save</div>
		<div class="btn">Delete</div>
	</div>
</template>
<script>
	export default {
		data: () => ({

		}),

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