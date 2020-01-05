<template>
	<textarea :class="className" v-model="dataText" @blur="$emit('onBlur', dataText)">{{dataText}}</textarea>
</template>
<script>
	export default {
		props: ['text', 'timeFrame'],
		data: () => ({
			dataText: "",
			classValues: ['down-trend', 'chop', 'up-trend'],
		}),
		computed: {
			className() {
				return this.classValues[this.timeFrame.value];
			}
		},
		created() {
			this.dataText = this.text;
		},
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
		transition: all 0.3s;
	}
	textarea.chop {
		background-color: var(--orange);
	}
	textarea.up-trend {
		background-color: var(--green);
	}
	textarea.down-trend {
		background-color: var(--red);
	}
</style>