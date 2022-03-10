<template>
	<section>
		<b-field>
			<b-input placeholder="Credit Card" v-cleave="masks.creditCard"> </b-input>
		</b-field>

		<b-field>
			<b-input
				placeholder="Numeral"
				v-cleave="masks.numeral"
				custom-class="has-text-right has-text-grey"
				size="is-medium"
				type="is-primary is-outlined"
			>
			</b-input>
		</b-field>

		<b-field :addons="false">
			<b-input
				placeholder="Custom"
				:value="value"
				v-cleave="masks.custom"
				@input.native="onInput"
			>
			</b-input>
			<p><b>Formatted value (v-model)</b>: {{ value }}</p>
			<p><b>Raw value</b>: {{ rawValue }}</p>
		</b-field>
	</section>
</template>

<script>
	import Cleave from 'cleave.js';
	/**
	 * We add a new instance of Cleave when the element
	 * is bound and destroy it when it's unbound.
	 */
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
		name: 'CustomInputTest',
		props: {
			labelText: String,
			radioObj: Object,
		},
		directives: { cleave },
		data() {
			return {
				inputModel: '',
				radioButton: '',
				labelPosition: 'inside',
				rightIcon: 'mail',
				value: '',
				rawValue: '',
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
