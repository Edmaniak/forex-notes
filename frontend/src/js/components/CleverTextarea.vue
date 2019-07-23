<template>
	<textarea>{{text}}</textarea>
</template>
<script>
	export default {
		props: ['text'],
		data: () => ({})
	}
</script>
<style scoped>
	textarea {
		padding: 10px;
		border: none;
		background-color: var(--green);
		border-radius: 10px;
		font-size: 12px;
		line-height: 1.5em;
		width: 100%;
		resize: none;
		min-height: 80px;
	}
</style>