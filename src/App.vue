/* eslint-disable */
<template>
	<div id="app">
		<CustomNavBar />
		<div class="container">
			<!-- <div class="columns">
				<div class="column  is-1">Side pannel</div>
				<div class="column">
					<SecondaryHeader />
					<CriticalIllness />
				</div>
			</div> -->

			<div
				class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
			>
				<div class="column"></div>
				<div class="column is-three-quarters">
					<CustomizeQuoteComponent />
				</div>
				<div class="column"></div>
			</div>
		</div>
		<!-- testing component to test default behaviour of buefy components -->
		<!-- <TestComponent /> -->

		<CustomFooter year="2022" />
	</div>
</template>

<script>
	import CustomNavBar from './components/CustomNavBar.vue';
	import CustomFooter from './components/CustomFooter.vue';
	// import SecondaryHeader from './components/SecondaryHeader.vue';
	// import CriticalIllness from './components/pages/CriticalIllness.vue';
	// import TestComponent from './components/TestComponent.vue';
	import CustomizeQuoteComponent from './components/CustomizeQuoteComponent.vue';
	export default {
		name: 'App',
		components: {
			CustomNavBar,
			// SecondaryHeader,
			CustomFooter,
			// CriticalIllness,
			// TestComponent,
			CustomizeQuoteComponent,
		},
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

	#app {
		font-family: 'Lato', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* margin: 60px 0px 0px; */
	}
	/* .is-clearfix::after {
    clear: both;
    content: "inch " !important;
    display: table;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
	font-weight: bold;
	width:50px !important;
} */
	.inputRightAddonText {
		border: 0px !important;
		position: absolute !important;
		top: 50%;
		right: 50%;
		transform: translate(-50%, -50%);
		z-index: 9;
		background: transparent;
		padding: 0px !important;
		margin: 0px;
		display: inline !important;
		height: auto !important;
		font-size: 16px !important;
	}
	.heightColumn .inputRightAddonText {
		right: 0%;
		transform: translate(-150%, -50%);
	}
	.inputLeftAddonText {
		border: 0px !important;
		position: absolute !important;
		z-index: 9;
		background: transparent;
		font-size: 16px !important;
		top: 50%;
		left: 50%;
		transform: translate(0%, -50%);
	}
</style>
