<template>
	<div class="columns">
		<b-field>
			<b-checkbox-button
				v-model="checkboxGroup"
				native-value="Nope"
				type="is-danger"
			>
				<span>Nope</span>
			</b-checkbox-button>

			<b-checkbox-button
				v-model="checkboxGroup"
				native-value="Yep"
				type="is-success"
			>
				<b-icon icon="check"></b-icon>
				<span>Yep</span>
			</b-checkbox-button>

			<b-checkbox-button v-model="checkboxGroup" native-value="Default">
				Default
			</b-checkbox-button>

			<b-checkbox-button
				v-model="checkboxGroup"
				native-value="Disabled"
				disabled
			>
				Disabled
			</b-checkbox-button>
		</b-field>
		<p class="content">
			<b>Selection:</b>
			{{ checkboxGroup }}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'CustomCheckboxGroup',
		props: {
			titleText: String,
		},
		data() {
			return {
				checkboxGroup: [],
			};
		},
	};
</script>
<style></style>
