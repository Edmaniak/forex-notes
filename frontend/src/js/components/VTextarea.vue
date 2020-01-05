<template>
	<div class="mdc-text-field mdc-text-field--textarea">
		<textarea @input="updateValue($event.target.value)" id="textarea" class="mdc-text-field__input" rows="10" cols="40">{{value}}</textarea>
		<div class="mdc-notched-outline">
			<div class="mdc-notched-outline__leading"></div>
			<div class="mdc-notched-outline__notch">
				<label for="textarea" class="mdc-floating-label">Daily notes</label>
			</div>
			<div class="mdc-notched-outline__trailing"></div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			value: {
				type: String
			}
		},
		data: () => ({}),
		methods: {
			updateValue(value) {
				this.$emit('input', value);
			},
		}
	}
</script>
<style scoped>
	.mdc-text-field--textarea {
		width: 50%;
	}
</style>