<template>
	<v-dialog @onClose="setShowDeleteConfirmationWindow(false)" title="Delete instrument" :active="getDeleteConfirmationWindowStatus">
		<div slot="body">
			<div>Delete?</div>
		</div>
		<div slot="footer">
			<button @click="deleteInstrument" type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
				<span class="mdc-button__label">OK</span>
			</button>
		</div>
	</v-dialog>
</template>
<script>
	import AppButton from "../AppButton.vue";
	import {mapActions, mapGetters} from 'vuex';
  import VDialog from "../VDialog";
	export default {
		components: {VDialog, AppButton},
		data: () => ({}),
		methods: {
			...mapActions(['deleteInstrument', 'setShowDeleteConfirmationWindow']),
		},
		computed: {
			...mapGetters(['getDeleteConfirmationWindowStatus'])
		}
	}
</script>