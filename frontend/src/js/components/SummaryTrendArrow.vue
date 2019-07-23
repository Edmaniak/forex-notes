<template>
	<svg :class="classValue" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
		 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
		 y="0px"
		 viewBox="0 0 512.171 512.171" style="enable-background:new 0 0 512.171 512.171;" xml:space="preserve">
<g>
	<g>
		<path d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"/>
	</g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
		<g>
</g>
</svg>

</template>
<script>
	export default {
		props: ['values'],
		data: () => ({
			classValues: ['down-trend', 'chop', 'up-trend'],
			actualValue: -1
		}),
		created: function(){

		},
		computed: {
			classValue: function () {
				const val = this.computeAverage(
					this.values.hour.value,
					this.values.fourHour.value,
					this.values.day.value,
					this.values.week.value,
					this.values.month.value
				);
				return this.classValues[Math.round(val)];
			}
		},
		methods: {
			computeAverage: function(){
				let average = 0;
				for (let i = 0; i < arguments.length; i++)
					average += arguments[i];
				return average / arguments.length;
			}
		},
	}
</script>
<style>
	svg {
		height: 30px;
		cursor: pointer;
		margin-right: 5px;
		fill: blue;
		transition: all 0.2s;
	}

	svg.down-trend {
		fill: var(--red);
		transform: rotate(-45deg);
	}

	svg.up-trend {
		fill: var(--green);
		transform: rotate(-135deg);
	}

	svg.chop {
		fill: var(--orange);
		transform: rotate(-90deg);
	}
</style>