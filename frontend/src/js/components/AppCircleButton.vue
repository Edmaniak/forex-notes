<template>
	<button type="button" @click="$emit('onClick')" class="mdc-fab">
		<div class="mdc-fab__ripple"></div>
		<span class="mdc-fab__icon material-icons">{{icon}}</span>
	</button>
</template>
<script>
	export default {
		props: ['icon']
	}
</script>