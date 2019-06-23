<template>
	<textarea class="clever-textarea">{{text}}</textarea>
</template>
<script>
	export default {
		props: ['text'],
		data: () => ({})
	}
</script>
<style>
	.clever-textarea {
		padding: 5px;
	}
</style>