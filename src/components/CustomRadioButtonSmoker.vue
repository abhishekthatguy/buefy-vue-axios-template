<template>
<div>
    <!-- <div>{{radioObj}}</div> -->
	<section>
		<b-field>
			<b-radio-button
				v-model="radioButton"
				native-value="Nope"
				type="is-primary is-light is-outlined"
			>
				<span>Smoker</span>
			</b-radio-button>

			<b-radio-button
				v-model="radioButton"
				native-value="Yep"
				type="is-primary is-light is-outlined"
			>
				<span>Non Smoker</span>
			</b-radio-button>
		</b-field>
	</section>
    </div>
</template>

<script>
	export default {
		name: 'CustomRadioButtonSmoker',
		props: {
			labelText: String,
			radioObj: Object,
		},
		data() {
			return {
				radioButton: '',
			};
		},
	};
</script>
