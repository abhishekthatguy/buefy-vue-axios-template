<template>
	<section :style="mask.inputSize">
		<b-field :addons="false" >
			<b-input
				:custom-class="customClassvalue"
				:placeholder="placeHolder"
				:value="value"
				v-model="value"
				v-cleave="mask"
				@input.native="onInput"
				:size="size"
				type="is-primary is-outlined"

			>
			</b-input>
			<!-- <p><b>Formatted value (v-model)</b>: {{ value }}</p>
			<p><b>Raw value</b>: {{ rawValue }}</p> -->
		</b-field>
		<p>{{value}}</p>
	</section>
</template>

<script>
	import Cleave from 'cleave.js';
	const cleave = {
		name: 'cleave',
		bind(el, binding) {
			const input = el.querySelector('input');
			input._vCleave = new Cleave(input, binding.value);
		},
		unbind(el) {
			const input = el.querySelector('input');
			input._vCleave.destroy();
		},
	};
	export default {
		name: 'CustomInput',
		props: {
			addonLabelLeft: String,
			addonLabelRight: String,
			addonLabelLeftClass: String,
			customClassvalue: String,
			inputModel: String,
			inputPlaceholder: String,
			inputType: String,
			labelPosition: String,
			minValue: String,
			maxValue: String,
			mask: Object,
			rightIcon: String,
			labelText: String,
			size: String,
			universalClass: String,
			inputAttr: Object,
			placeHolder:String
		},
		directives: { cleave },
		data() {
			return {
				radioButton: '',
				rawValue: '',
				value: '',
				masks: {
					creditCard: {
						creditCard: true,
						// onValueChanged: function (e) {
						// 	e.target = { value: '5100-1234', rawValue: '51001234' }
						// },
					},
					dateField: {
						date: true,
						delimiter: '-',
						datePattern: ['Y', 'm', 'd'],
					},
					phone: { phone: true, phoneRegionCode: '{country}' },
					numeral: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						prefix: '$ Prefix ',
						signBeforePrefix: true,
						tailPrefix: true,
					},

					custom: {
						delimiters: ['.', '.', '-'],
						blocks: [6, 3, 3, 2],
						numericOnly: true,
						prefix: 'PREFIX',
						uppercase: true,
						signBeforePrefix: true,
					},
				},
			};
		},
		methods: {
			onInput(event) {
				this.rawValue = event.target._vCleave.getRawValue();
				this.value = event.target._vCleave.getFormattedValue();
			},
		},
	};
</script>
<style scoped>
.w-400{
	width:100px !important;
}
</style>
