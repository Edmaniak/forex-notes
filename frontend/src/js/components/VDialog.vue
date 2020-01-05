<template>
	<div class="mdc-dialog"
	     role="alertdialog"
	     aria-modal="true"
	     aria-labelledby="my-dialog-title"
	     aria-describedby="my-dialog-content"
			:class="{'mdc-dialog--open': active}"
	>
		<div class="mdc-dialog__container">
			<div class="mdc-dialog__surface">
				<h2 class="mdc-dialog__title" id="my-dialog-title">{{title}}</h2>
				<div class="mdc-dialog__content" id="my-dialog-content">
					<slot name="body"></slot>
				</div>
				<footer class="mdc-dialog__actions">
					<slot name="footer"></slot>
				</footer>
			</div>
		</div>
		<div class="mdc-dialog__scrim"></div>
	</div>
</template>
<script>
	export default {
		props: ['title', 'active']
	}
</script>