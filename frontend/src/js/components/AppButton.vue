<template>
	<button type="button" @click="$emit('onClick')" class="mdc-button mdc-button--raised">
		<div class="mdc-button__ripple"></div>
		<span class="mdc-button__label">
			<slot></slot>
		</span>
	</button>
</template>
<script>
	export default {
		props: ['title'],
		data: () => ({

		})
	}
</script>