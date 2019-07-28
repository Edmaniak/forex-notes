<template>
	<div class="modal" :class="{'active': getAddInstrumentWindow}">
		<div @click="setShowAddInstrumentWindow(false)" class="close">
			<i class="fas fa-times"></i>
		</div>
		<h2>Přidat instrument</h2>
		<input type="text" v-model="name">
		<app-button @onClick="addInstrument({name})">Přidat</app-button>
	</div>
</template>
<script>
	import AppButton from "../AppButton.vue";
	import {mapActions, mapGetters} from "vuex"

	export default {
		components: {AppButton},
		data: () => ({
			name: '',
		}),
		computed: {
			...mapGetters(['getAddInstrumentWindow'])
		},
		methods: {
			...mapActions(['addInstrument', 'setShowAddInstrumentWindow']),
		}

	}
</script>