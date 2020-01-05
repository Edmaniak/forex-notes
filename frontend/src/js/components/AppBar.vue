<template>
	<header class="mdc-top-app-bar mdc-top-app-bar--fixed">
		<div class="mdc-top-app-bar__row">
			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
				<button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">broken_image</button>
				<span class="mdc-top-app-bar__title">Invest Grid</span>
				<countdown/>
			</section>
			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
				<router-link class="mdc-button mdc-top-app-bar__action-item--unbounded mdc-button--unelevated" to="/history"><span class="mdc-button__label">History</span></router-link>
				<router-link class="mdc-button mdc-top-app-bar__action-item--unbounded mdc-button--unelevated" to="/situation"><span class="mdc-button__label">Situation</span></router-link>
			</section>
		</div>
	</header>
</template>
<script>
	import Countdown from "./Countdown";
  export default {
	  components: {Countdown}
	}
</script>