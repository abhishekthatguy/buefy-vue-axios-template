<template>
	<section :style="mask?mask.inputSize:''">
	<!-- <section> -->
		<b-field :addons="false">
			<b-input
				:custom-class="customClassvalue"
				:placeholder="placeHolder"
				:value="value"
				v-model="value"
				v-cleave="mask"
				@input.native="onInput"
				:size="size"
				type="is-primary is-outlined"
				:min="minValue"
				:max="maxValue"
				:icon-right="mask.iconRight"
				:icon="mask.leftIcon"
			>
			</b-input>
			</b-field>

			<!-- <div class="field">
  <p class="control has-icons-left has-icons-right has-text-primary">
    <input class="input is-outlined is-medium is-primary" type="number" placeholder="`${placeHolder}`" :size="size">
    <span class="icon is-small is-left">
      <i :class="`fas fa-${mask.leftIcon}`"> {{mask.leftIcon}}</i>
    </span>
    <span class="icon is-small is-right">
      <i :class="`fas fa-${mask.leftIcon}`">{{mask.leftIcon}}</i>
    </span>
  </p>
</div> -->
		<!-- <p><b>Formatted value (v-model)</b>: {{ value }}</p>
			<p><b>Raw value</b>: {{ rawValue }}</p> -->
		
		<!-- <p>{{value}}</p> -->
	
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
			placeHolder: String,
			icon: String,
		},
		directives: { cleave },
		data() {
			return {
				lock: 'lock',
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
	.w-400 {
		width: 100px !important;
	}
</style>
