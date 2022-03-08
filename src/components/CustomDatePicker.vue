<template>
	<b-field>
		<b-datepicker
			:size="size"
			:placeholder="inputPlaceholder"
			:min-date="min"
			:max-date="max"
            :type="datePickerType"
            :custom-class="customClassvalue"
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
            min:String,
            max:String,
            datePickerType: String,
            customClassvalue: String,
		},
		data() {
			const today = new Date();

			return {
				date: new Date(),
				minDate: new Date(
					today.getFullYear() - 80,
					today.getMonth(),
					today.getDate(),
				),
				maxDate: new Date(
					today.getFullYear() + 18,
					today.getMonth(),
					today.getDate(),
				),
			};
		},
	};
</script>
