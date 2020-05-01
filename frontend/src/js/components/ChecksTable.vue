<template>
	<div class="mdc-data-table">
		<table class="mdc-data-table__table" aria-label="Dessert calories">
			<tbody class="mdc-data-table__content">
			<tr v-for="check in checks" data-row-id="u0" class="mdc-data-table__row">
				<td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
					<div class="mdc-checkbox mdc-data-table__row-checkbox">
						<input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u0"/>
						<div class="mdc-checkbox__background">
							<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
								<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
							</svg>
							<div class="mdc-checkbox__mixedmark"></div>
						</div>
					</div>
				</td>
				<td class="mdc-data-table__cell">{{check}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
	  props: {
		  checks: {
				type: Array
		  }
	  }
	}

</script>
<style scoped>
	table {
		width: 100%;
	}
</style>