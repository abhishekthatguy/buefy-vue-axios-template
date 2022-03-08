<template>
	<b-field :size="size">
		<b-datepicker
			:size="size"
			:placeholder="inputPlaceholder"
			:min-date="min"
			:max-date="max"
			:type="datePickerType"
			:custom-class="customClassvalue"
			editable
			:unselectable-dates="unselectableDates"
			:unselectable-days-of-week="disableWeekends ? [0, 6] : null"
		>
		</b-datepicker>
	</b-field>
</template>

<script>
	export default {
		name: 'CustomDatePicker',
		props: {
			labelText: String,
			size: String,
			inputPlaceholder: String,
			min: String,
			max: String,
			datePickerType: String,
			customClassvalue: String,
		},
		data() {
			// const today = new Date();

			return {
				date: new Date(),
				disableWeekends: false,
				unselectableAfterDate: 20,
			};
		},
		methods: {
			unselectableDates(day) {
				return this.unselectableAfterDate < day.getDate();
			},
		},
	};
</script>
