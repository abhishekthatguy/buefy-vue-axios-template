/* eslint-disable */
<template>
	<div id="app">
		<div
			class="columns is-variable is-1-mobile is-0-tablet is-2-desktop is-8-widescreen is-2-fullhd"
		>
			<div class="column">
				<CustomNavBar />
			</div>
		</div>
		<div
			class="columns is-variable is-1-mobile is-0-tablet is-2-desktop is-8-widescreen is-2-fullhd is-hidden"
		>
			<div class="column is-1-tablet"></div>
			<div class="column">
				<SecondaryHeader />
			</div>
		</div>
		<div
			class="columns is-variable is-1-mobile is-0-tablet is-9-desktop is-8-widescreen is-2-fullhd"
		>
			<div class="column is-1-tablet"></div>
			<div class="column is-9-desktop">
				<!-- <CriticalIllness /> -->
				<!-- <CustomizeQuoteComponent /> -->
				<CustomiseYourQuote />

				<!-- <TestComponent /> -->
			</div>
			<div class="column"><CustomInputTest /></div>
		</div>
		<div class="columns is-full">
			<div class="column">
				<CustomFooter year="2022" />
			</div>
		</div>
	</div>
</template>

<script>
	import CustomNavBar from './components/CustomNavBar.vue';
	import CustomFooter from './components/CustomFooter.vue';
	import SecondaryHeader from './components/SecondaryHeader.vue';
	// import CriticalIllness from './components/pages/CriticalIllness.vue';
	// import TestComponent from './components/TestComponent.vue';
	// import CustomizeQuoteComponent from './components/CustomizeQuoteComponent.vue';
	import CustomiseYourQuote from './components/pages/CustomiseYourQuote.vue';
	import CustomInputTest from './components/CustomInputTest.vue';
	export default {
		name: 'App',
		components: {
			CustomNavBar,
			SecondaryHeader,
			CustomFooter,
			// CriticalIllness,
			// TestComponent,
			// CustomizeQuoteComponent,
			CustomiseYourQuote,
			CustomInputTest,
		},
		data() {
			return {
				generalEntry: [
					{
						id: 1,
						category: 'Your Build',
						subCategory: {
							height: {
								label: 'Your Height',
								labelExtraInfo: 'Enter in cms',
								userData: [
									{
										heightInFeet: '',
										heightInInch: '',
									},
								],
							},
						},
					},
				],
			};
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
