<template>
	<div @click="$emit('onClick')" class="btn">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: ['title'],
		data: () => ({

		})
	}
</script>
<style scoped>
	.btn {
		padding: 0.5em 1em;
		cursor: pointer;
		margin-right: 15px;
		background-color: var(--yellow);
		border-radius: 3px;
	}
</style>