<template>
	<v-dialog @onClose="setShowAddInstrumentWindow(false)" title="Add instrument" :active="getAddInstrumentWindow">
		<div slot="body">
			<v-text-field type="text" label="Instrument code" v-model="name"/>
		</div>
		<div slot="footer">
			<button @click="addInstrument({name})" type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
				<span class="mdc-button__label">Add instrument</span>
			</button>
		</div>
	</v-dialog>
</template>
<script>
	import AppButton from "../AppButton.vue";
	import {mapActions, mapGetters} from "vuex"
  import VDialog from "../VDialog";
  import VTextField from "../VTextField";

	export default {
		components: {VTextField, VDialog, AppButton},
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