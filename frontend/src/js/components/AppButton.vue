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
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
		margin-right: 15px;
		background-color: var(--blue);
		border-radius: 5px;
		color: var(--yellow);
		font-weight: 900;
		font-size: 18px;
		letter-spacing: 1px;
		transition: 0.1s linear;
	}
	.btn:hover {
		transform: translateY(-5%);
		box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);
	}
</style>