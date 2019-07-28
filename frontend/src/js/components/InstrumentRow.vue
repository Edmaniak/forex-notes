<template>
	<tr>
		<td class="pair">
			<div>
				<img @click="changeOnFire" class="on-fire" src="img/trending.svg" alt="not trending" v-if="pair.onFire">
				<img @click="changeOnFire" class="on-fire" v-else src="img/trending-empty.svg" alt="not trending">
				<summary-trend-arrow :timeFrames="pair.timeFrames"></summary-trend-arrow>
				<strong>{{pair.name}}</strong>
			</div>
		</td>
		<td v-for="(timeFrame, timeFrameIndex) in this.pair.timeFrames">
			<timeframe-status :instrument="pair" :pair-index="pairIndex" :time-frame="timeFrame"
							  :time-frame-index="timeFrameIndex"></timeframe-status>
		</td>
		<td>
			<div @click="deleteIt">
				<i class="fas fa-times"></i>
			</div>
		</td>
	</tr>
</template>
<script>
	import TimeframeStatus from "./TimeframeStatus.vue";
	import TrendArrow from "./TrendArrow.vue";
	import SummaryTrendArrow from "./SummaryTrendArrow.vue";
	import {mapActions} from 'vuex';

	export default {
		components: {SummaryTrendArrow, TrendArrow, TimeframeStatus},
		props: ['pair', 'pairIndex'],
		data: () => ({}),
		created() {
			console.log(this.pair.timeFrames)
		},
		methods: {
			...mapActions(['setInstrumentToDelete', 'setShowDeleteConfirmationWindow']),
			deleteIt: function () {
				this.setInstrumentToDelete({id: this.pair._id, index: this.pairIndex});
				this.setShowDeleteConfirmationWindow(true)
			},
			changeOnFire: function () {

			}
		}
	}
</script>
<style scoped>
	td > div {
		display: flex;
		align-items: center;
	}

	strong {
		padding: 3px 10px;
		border-radius: 3px;
		background-color: #b9abab;
		text-transform: uppercase;
	}

	.on-fire {
		width: 30px;
		margin-right: 5px;
		cursor: pointer;
	}

	td {
		padding: 15px 10px;
		background-color: #dedede;
	}
	td:first-child {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		padding-right: 0;
	}
	td:last-child {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}
</style>