<template>
	<label class="mdc-text-field">
		<div class="mdc-text-field__ripple"></div>
		<input class="mdc-text-field__input" :type="type" aria-labelledby="my-label-id">
		<span class="mdc-floating-label" id="my-label-id">{{label}}</span>
		<div class="mdc-line-ripple"></div>
	</label>
</template>
<script>
	export default {
		props: {
			label: {
				type: String
			},
			type: {
				type: String
			}
		}
	}
</script>