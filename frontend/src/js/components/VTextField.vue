<template>
	<div class="mdc-text-field">
		<input :type="type" id="my-text-field" class="mdc-text-field__input" @input="updateValue($event.target.value)">
		<label class="mdc-floating-label" for="my-text-field">{{label}}</label>
		<div class="mdc-line-ripple"></div>
	</div>
</template>
<script>
	export default {
		props: {
			'label': {
				type: String
			},
			type: {
				required: true,
				type: String
			}
		},
		methods: {
			updateValue(value) {
				this.$emit('input', value);
			}
		}
	}
</script>