<template>
	<div class="modal" :class="{'active': getEnterTradeWindow}">
		<div @click="setShowEnterTradeWindow(false)" class="close">
			<i class="fas fa-times"></i>
		</div>
		<h2 class="mdc-typography mdc-typography--headline6">Checks</h2>
		<ChecksTable :checks="['Up trend?', 'Logicka situace', 'Neutralni fundament?']"/>
		<h2 class="mdc-typography mdc-typography--headline6">Velikost</h2>
		<div class="input">
			<div>
				<div>
					<label for="">Deposit</label>
					<input @change="recalculate" v-model="deposit" type="number">
				</div>
				<div>
					<label>% Riziko</label>
					<input @change="recalculate" v-model="risk" type="number">
				</div>
			</div>
		</div>
		<div class="input">
			<div>
				<div>
					<label for="">Stoploss</label>
					<input @change="recalculate" v-model="stoploss" type="number">
				</div>
				<div>
					<label>Takeprofit</label>
					<input @change="recalculate" v-model="takeprofit" type="number">
				</div>
			</div>
		</div>
		<div class="input">
			<div>
				<div>
					<label for="">RRR</label>
					<input @change="recalculate" v-model="riskRewardRatio" type="text">
				</div>
				<div>
					<label for="">Split ratio</label>
					<input @change="recalculate" v-model="splitRatio" type="text">
				</div>
			</div>
		</div>
		<h2>Výstup</h2>
		<div>
			<ul>
				<li v-for="feedback in feedbacks">{{feedback}}</li>
			</ul>
		</div>
		<div class="mdc-data-table">
			<table class="mdc-data-table__table" aria-label="Dessert calories">
				<tbody class="mdc-data-table__content">
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">Size:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{lotSize | round }} lot</td>
				</tr>
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">RRR:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{riskRewardRatio}}</td>
				</tr>
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">Split 1:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{lotSplit1 }} lots</td>
				</tr>
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">Split 2:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{lotSplit2 }} lots</td>
				</tr>
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">Loss:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{lossUSD}} USD | {{lossCZK}} CZK</td>
				</tr>
				<tr class="mdc-data-table__row">
					<td class="mdc-data-table__cell">Gain:</td>
					<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{gainUSD}} USD | {{gainCZK}} CZK</td>
				</tr>

				</tbody>
			</table>
		</div>
		<div class="buttons">
			<app-button>GO!</app-button>
			<app-button>Cancel</app-button>
		</div>
	</div>
</template>
<script>
	import TrendArrow from "../TrendArrow";
	import AppButton from "../AppButton";
	import axios from 'axios';
	import {mapGetters, mapActions} from 'vuex';
	import Checkbox from "../Checkbox";
	import ChecksTable from "../ChecksTable";

	export default {
		data: () => ({
			stoploss: 1,
			takeprofit: 1,
			risk: 2,
			feedbacks: [],
			lotSize: 0,
			lotSplit1: 0,
			lotSplit2: 0,
			riskRewardRatio: '',
			splitRatio: 0.75,
			deposit: 5000,
			lossCZK: 0,
			lossUSD: 0,
			gainUSD: 0,
			gainCZK: 0,
			rate: 0
		}),
		components: {ChecksTable, Checkbox, AppButton, TrendArrow},
		created() {
			this.recalculate();
			axios.get('/api/rate').then(res => this.rate = res.data.rates.CZK);
		},
		computed: {
			...mapGetters(['getEnterTradeWindow'])
		},
		methods: {
			...mapActions(['setShowEnterTradeWindow']),
			recalculate() {
				const maxRiskInUsd = (this.deposit / 100) * this.risk;

				this.lotSize = maxRiskInUsd / this.stoploss / 10;
				this.lotSplit1 = Math.round((this.lotSize * this.splitRatio) * 10) / 10;
				this.lotSplit2 = Math.round((this.lotSize * (1 - this.splitRatio)) * 10) / 10;

				this.riskRewardRatio = `${Math.round((this.takeprofit / this.stoploss) * 10) / 10}:${Math.round((this.stoploss / this.stoploss) * 10) / 10}`;

				this.lossUSD = Math.round(this.stoploss * this.lotSize * 10);
				this.gainUSD = Math.round(this.takeprofit * this.lotSize * 10);

				this.lossCZK = Math.round(this.rate * this.lossUSD);
				this.gainCZK = Math.round(this.rate * this.gainUSD);
			}
		}
	}
</script>
<style scoped>
	.input {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: #f6f6f6 1px solid;
		width: 100%;
		padding: 10px;
		font-size: 15px;
	}

	input[type="number"] {
		margin-left: 10px;
		margin-right: 10px;
	}

	textarea {
		border-radius: 5px;
		border: #e9e9e9 1px solid;
		width: 100%;
		font-size: 14px;
		padding: 5px;
		margin-top: 5px;
	}

	.input div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.buttons {
		display: flex;
	}

	input {
		border-radius: 5px;
		border: #e9e9e9 1px solid;
		padding: 5px;
	}
</style>