<template>
	<div>
		<span>Smazat?</span>
		<app-button @click="">OK</app-button>
	</div>
</template>
<script>
	import AppButton from "../AppButton.vue";
	import {mapActions, mapGetters} from 'vuex';
	export default {
		components: {AppButton},
		data: () => ({}),
		methods: {
			...mapActions['deletePair'],
		},
		computed: {
			...mapGetters['getDeleteConfirmationWindowStatus']
		}
	}
</script>