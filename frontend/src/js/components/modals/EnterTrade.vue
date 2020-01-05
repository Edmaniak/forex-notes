<template>
	<div class="modal" :class="{'active': getEnterTradeWindow}">
		<div @click="setShowEnterTradeWindow(false)" class="close">
			<i class="fas fa-times"></i>
		</div>
		<h2>Checks</h2>
		<div class="input">
			<div>
				<input type="checkbox">
				<label for="">Ucházející up trend?</label>
				<TrendArrow/>
			</div>
		</div>
		<div class="input">
			<div>
				<input type="checkbox">
				<label for="">Logická situace?</label>
			</div>
			<textarea placeholder="Poznamka"></textarea>
		</div>
		<div class="input">
			<div>
				<input type="checkbox">
				<a href="https://forexfactory.com" target="_blank">Neutrální fundament?</a>
			</div>
			<textarea placeholder="Poznámka"></textarea>
		</div>
		<h2>Velikost</h2>
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
		<h2>Výstup</h2>
		<div>
			<ul>
				<li v-for="feedback in feedbacks">{{feedback}}</li>
			</ul>
		</div>
		<table>
			<tr>
				<th>Size:</th>
				<td>{{lotSize | round }} lot</td>
			</tr>
			<tr>
				<th>RRR:</th>
				<td>{{riskRewardRatio}}</td>
			</tr>
			<tr>
				<th>Split 1:</th>
				<td>{{lotSplit1 }} lot</td>
			</tr>
			<tr>
				<th>Split 2:</th>
				<td>{{lotSplit2 }} lot</td>
			</tr>
			<tr>
				<th>Loss:</th>
				<td>{{lossUSD}} USD | {{lossCZK}} CZK</td>
			</tr>
			<tr>
				<th>Gain:</th>
				<td>{{gainUSD}} USD | {{gainCZK}} CZK</td>
			</tr>
		</table>
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
			deposit: 5000,
			lossCZK: 0,
			lossUSD: 0,
			gainUSD: 0,
			gainCZK: 0,
			rate: 0
		}),
		components: {AppButton, TrendArrow},
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
				this.lotSplit1 = Math.round((this.lotSize * 0.75) * 10) / 10;
				this.lotSplit2 = Math.round((this.lotSize * 0.25) * 10) / 10;

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

	h2 {
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin: 10px 0;

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

	th, td {
		padding: 0 5px;
	}

	th {
		text-align: right;
	}

	input {
		border-radius: 5px;
		border: #e9e9e9 1px solid;
		padding: 5px;
	}
</style>