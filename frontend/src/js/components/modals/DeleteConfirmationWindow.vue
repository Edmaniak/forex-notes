<template>
	<div class="modal" :class="{active: getDeleteConfirmationWindowStatus}">
		<div>Smazat?</div>
		<app-button @onClick="deleteInstrument">OK</app-button>
	</div>
</template>
<script>
	import AppButton from "../AppButton.vue";
	import {mapActions, mapGetters} from 'vuex';
	export default {
		components: {AppButton},
		data: () => ({}),
		methods: {
			...mapActions(['deleteInstrument']),
		},
		computed: {
			...mapGetters(['getDeleteConfirmationWindowStatus'])
		}
	}
</script>