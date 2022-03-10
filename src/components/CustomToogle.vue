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
				<span>Male</span>
			</b-radio-button>

			<b-radio-button
				v-model="radioButton"
				native-value="Yep"
				type="is-primary is-light is-outlined"
			>
				<span>Female</span>
			</b-radio-button>
		</b-field>
	</section>
    </div>
</template>

<script>
	export default {
		name: 'CustomToogle',
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
