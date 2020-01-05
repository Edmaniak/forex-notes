<template>
	<tr>
		<td class="pair">
			<div>
				<img @click="changeOnFire" class="on-fire" src="img/trending.svg" alt="not trending" v-if="pair.onFire">
				<img @click="changeOnFire" class="on-fire" v-else src="img/trending-empty.svg" alt="not trending">
				<summary-trend-arrow :timeFrames="pair.timeFrames"/>
				<div class="mdc-chip mdc-theme--primary-bg" role="row">
					<div class="mdc-chip__ripple"></div>
					<span role="gridcell">
           <span role="button" tabindex="0" class="mdc-chip__text">{{pair.name}}</span>
          </span>
				</div>
			</div>
		</td>
		<td v-for="(timeFrame, timeFrameIndex) in this.pair.timeFrames">
			<timeframe-status :instrument="pair" :pair-index="pairIndex" :time-frame="timeFrame"
			                  :time-frame-index="timeFrameIndex"/>
		</td>
		<td>
			<div>
				<div @click="setShowEnterTradeWindow(true)">
					<i class="fas fa-money-check-alt"></i>
				</div>
				<div @click="deleteIt">
					<i class="fas fa-times"></i>
				</div>
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
		methods: {
			...mapActions(['setInstrumentToDelete', 'setShowDeleteConfirmationWindow', 'switchOnFire', 'setShowEnterTradeWindow']),
			deleteIt: function () {
				this.setInstrumentToDelete({id: this.pair._id, index: this.pairIndex});
				this.setShowDeleteConfirmationWindow(true)
			},
			changeOnFire: function () {
				this.switchOnFire({id: this.pair._id, index: this.pairIndex});
			}
		}
	}
</script>
<style scoped>
	td > div {
		display: flex;
		align-items: center;
	}

	svg {
		opacity: 0.75;
		font-size: 22px;
		margin: 0 0.5em;
	}

	.fa-money-check-alt {
		fill: var(--green) !important;
	}

	.fa-times {
		fill: var(--red) !important;
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