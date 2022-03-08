<template>
	<form class="card">
		<header class="card-header">
			<div class="column">
				<p class="card-header-title">Critical Illness</p>
			</div>
		</header>
		<div class="card-content">
			<div class="columns is-mobile">
				<div class="column is-one-Third">
					<div class="field">
						<label class="label">Date of Birth</label>
						<div class="control">
							<CustomDatePicker
								size="is-medium"
								inputPlaceholder="dd/mm/yyyy"
								:min="minDate"
								:max="maxDate"
								datePickerType="month"
							/>
						</div>
					</div>
				</div>
				<div class="column is-one-Third">
					<div class="field">
						<label class="label">Gender</label>
						<div class="control">
							<CustomRadioButton radioObj="{radioObj}" />
						</div>
					</div>
				</div>
				<div class="column is-one-Third">
					<div class="field">
						<label class="label">Smoking Status</label>
						<div class="control">
							<CustomRadioButtonSmoker radioObj="{radioObj}" />
						</div>
					</div>
				</div>
			</div>
			<div class="columns is-mobile">
				<div class="column is-one-Third">
					<div class="field">
						<label class="label">Coverage Amount</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input" />
						</div>
					</div>
				</div>
				<div class="column is-one-Third">
					<div class="field">
						<label class="label">Coverage Term</label>
						<div class="control">
							<b-field>
								<b-select placeholder="Select years">
									<option
										v-for="option in coverageYears"
										:value="option.id"
										:key="option.id"
									>
										{{ option.name }}
									</option>
								</b-select>
							</b-field>
						</div>
					</div>
				</div>
				<div class="column is-one-Third">&nbsp;</div>
			</div>
		</div>
		<footer class="card-footer">
			<div class="column">
				<div class="buttons">
					<button class="button is-primary">Get Quotes</button>
					<button class="button is-danger">Cancel</button>
				</div>
			</div>
		</footer>
	</form>
</template>

<script>
	import CustomDatePicker from '../CustomDatePicker.vue';
	import CustomRadioButton from '../CustomRadioButton.vue';
	import CustomRadioButtonSmoker from '../CustomRadioButtonSmoker.vue';
	export default {
		name: 'CriticalIllness',
		props: {
			msg: String,
		},
		components: {
			CustomDatePicker,
			CustomRadioButton,
			CustomRadioButtonSmoker,
		},
		data() {
			return {
				minDate: new Date(
					today.getFullYear() - 40,
					today.getMonth(),
					today.getDate(),
				),
				maxDate: new Date(
					today.getFullYear() + 1,
					today.getMonth(),
					today.getDate(),
				),
				radioObj: {
					labels: ['Male', 'Female', 'Others'],
					labelsIcon: ['tick', 'cross'],
				},
				coverageYears: [
					{ id: 1, name: '10 years' },
					{ id: 2, name: '15 years' },
					{ id: 3, name: '20 years' },
					{ id: 4, name: '30 years' },
				],
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card {
		margin: 40px 0px;
	}
</style>
