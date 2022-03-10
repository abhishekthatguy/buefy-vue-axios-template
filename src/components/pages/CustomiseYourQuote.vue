<template>
	<section id="testcomponent" class="section">
		<div class="container has-text-left-tablet">
			<div class="column box">
				<div class="column"></div>
				<div class="column">
					<div class="content has-text-centered">
						<h1 class="title">Let's customize your quote</h1>
						<p class="is-size-6 has-text-grey">
							If you answer a few questions below, we may be able to find you an
							even lower rate and potentially save you money on your premiums.
						</p>
					</div>

					<hr />
					<div class="content icon-text has-text-grey">
						<p class="block mx-auto">
							<span class="icon">
								<i class="fas fa-lock"></i>
							</span>
							<span>
								Your information is completely safe with us. We do not sell your
								details</span
							>
						</p>
					</div>

					<!-- start here -->
					<CustomTitleLight titleText="Add on Component" />
					<b-field class="heightColumn">
						<template #label>
							Enter Your Phone
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in format (345) 666-6666 )</span
							>
						</template>
						<b-field grouped custom-class="classes">
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									:mask="inputMaskPhone"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="Phone"
								/>
							</b-field>
						</b-field>
					</b-field>
					<b-field class="heightColumn">
						<template #label>
							Born on
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in format (dd-mm-yyyy )</span
							>
						</template>
						<b-field grouped custom-class="classes">
							<b-field>
								<CustomInput :customClassvalue="classes" :mask="masks.monthField"
								:inputAttr="inputAttr" :size="elementsHeight" placeHolder="MM/YYYY" />
							</b-field>
						</b-field>
					</b-field>
					<b-field class="heightColumn">
						<template #label>
							Last Tobacco Used
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in format (mm-yyyy )</span
							>
						</template>
						<b-field grouped custom-class="classes">
							<b-field>
								<CustomInput :customClassvalue="classes" :mask="masks.dateField"
								:inputAttr="inputAttr" :size="elementsHeight" placeHolder="DD/MM/YYYY" />
							</b-field>
						</b-field>
					</b-field>
					<b-field class="heightColumn">
						<template #label>
							Postal Code
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in format (A1A A1A )</span
							>
						</template>
						<b-field grouped custom-class="classes is-hidden">
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									:mask="masks.postalCode"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="A1A A1A"
								/>
							</b-field>
						</b-field>
					</b-field>
					<hr />
					<!-- temp code end  -->

					<CustomTitleLight titleText="Your Build" />
					<b-field class="heightColumn">
						<template #label>
							Your Height
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in cms)</span
							>
						</template>
						<b-field grouped custom-class="classes">
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									:mask="inputMask"
									:inputAttr="inputAttr"
									addonLabelRight="ft"
									inputPlaceholder="e.g. 5"
									minValue="0"
									maxValue="10"
									:size="elementsHeight"
									inputValue="{}"
								/>
							</b-field>
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									addonLabelRight="in"
									inputPlaceholder="e.g. 9"
									minValue="0"
									maxValue="60"
									:size="elementsHeight"
								/>
							</b-field>
						</b-field>
					</b-field>
					<b-field type="is-primary" grouped is-3 label="Your Weight">
						<b-input
							:size="elementsHeight"
							:customClassvalue="classes"
							class="w-120 has-text-primary"
							placeholder="e.g. 160"
						></b-input>
						<b-radio-button
							v-model="radioWeight"
							:size="elementsHeight"
							native-value="lbs"
							type="is-outlined"
						>
							<span>Lbs</span>
						</b-radio-button>

						<b-radio-button
							v-model="radioWeight"
							:size="elementsHeight"
							native-value="kgs"
							type="is-outlined"
						>
							<span>Kgs</span>
						</b-radio-button>
					</b-field>
					<hr />
					<CustomTitleLight titleText="Tobacco Use" />
					<b-field
						type="is-danger"
						grouped
						is-3
						label="Have you used any tobacco product(s) in the last 5 years? Select all that apply."
					>
						<div class="columns">
							<div class="column">
								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="cigrettes"
									class="w-210 block has-text-primary"
									type="is-primary is-outlined"
								>
									<span>Cigrettes</span>
								</b-checkbox-button>

								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="cigar"
									type="is-primary is-outlined"
									class="w-210 block"
								>
									<span>Cigar</span>
								</b-checkbox-button>
								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="pipes"
									type="is-primary is-outlined"
									class="w-210 block"
								>
									<span>Pipes</span>
								</b-checkbox-button>
							</div>
							<div class="column">
								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="chewingTobacco"
									type="is-primary is-outlined"
									class="w-210 block"
								>
									<span>Chewing tobacco</span>
								</b-checkbox-button>
								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="necotine"
									type="is-primary is-outlined"
									class="w-210 block"
								>
									<span>Necotine patch/gum</span>
								</b-checkbox-button>
								<b-checkbox-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="others"
									type="is-primary is-outlined"
									class="w-210 block"
								>
									<span>Others</span>
								</b-checkbox-button>
							</div>
						</div>
					</b-field>
					<div v-for="option in tobaccoUse" :key="option">
						<div v-if="option === 'cigrettes'">
							<b-field>
								<template #label>
									When was the last time you used cigarettes?
									<span class="has-text-mute is-italic"
										><i class="fa fa-info-circle"
									/></span>
								</template>
							</b-field>
							<b-field>
								<CustomDatePicker
									:size="elementsHeight"
									inputPlaceholder="MM/YYYY"
									labelText="Date of Birth"
									:min="minDate"
									:max="maxDate"
									datePickerType="month"
									class="w-210"
									:customClassvalue="classes"
								/>
							</b-field>
						</div>
						<div v-if="option === 'cigrettes'">
							<b-field>
								<template #label>
									On average, how many cigarettes per day do/did you smoke?
								</template>
							</b-field>
							<b-field>
								<CustomInput
									customClassvalue="w-290 has-text-left has-text-primary"
									addonLabelRight="per day"
									inputPlaceholder="Figures Only"
									minValue="0"
									maxValue="60"
									:size="elementsHeight"
								/>
							</b-field>
						</div>
						<b-field v-if="option === 'cigar'">
							<template #label>
								When was the last time you used cigars?
								<span class="has-text-mute is-italic"
									><i class="fa fa-info-circle"
								/></span>
							</template>
							<b-field>
								<CustomDatePicker
									:size="elementsHeight"
									inputPlaceholder="MM/YYYY"
									labelText="Date of Birth"
									:min="minDate"
									:max="maxDate"
									datePickerType="month"
									class="w-210"
									:customClassvalue="classes"
								/>
							</b-field>
						</b-field>
						<b-field v-if="option === 'cigar'">
							<template #label>
								On average, how many cigars per day do/did you smoke?
							</template>
							<b-field>
								<CustomInput
									customClassvalue="w-290 has-text-left has-text-primary"
									addonLabelRight="per month"
									inputPlaceholder="Figures Only"
									minValue="0"
									maxValue="60"
									:size="elementsHeight"
								/>
							</b-field>
						</b-field>
					</div>
					<!-- v-if="tobaccoUse === 'cigrettes'" -->

					<hr />
					<CustomTitleLight titleText="Blood Pressure" />

					<b-field
						type="is-danger"
						grouped
						is-3
						label="Have you ever been treated for or taken medication for high blood pressure?"
					>
						<b-radio-button
							v-model="highBloodPressure"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>

						<b-radio-button
							v-model="highBloodPressure"
							:size="elementsHeight"
							native-value="no"
							type="is-primary  is-outlined"
						>
							<span>No</span>
						</b-radio-button>
					</b-field>
					<b-field v-if="highBloodPressure === 'yes'">
						<template #label>
							Please enter your most recent blood pressure reading
						</template>
					</b-field>
					<b-field v-if="highBloodPressure === 'yes'">
						<CustomInput
							customClassvalue="w-290 p-60 has-text-primary has-txt-center"
							addonLabelLeft="Systolic:"
							addonLabelLeftClass="labelLeftClass"
							addonLabelRight="mmHg"
							inputPlaceholder="e.g. 120"
							minValue="0"
							maxValue="300"
							:size="elementsHeight"
						/>
					</b-field>
					<b-field v-if="highBloodPressure === 'yes'">
						<CustomInput
							customClassvalue="w-290 p-60 has-text-primary "
							addonLabelLeft="Diastolic:"
							addonLabelRight="mmHg"
							inputPlaceholder="e.g. 80"
							minValue="0"
							maxValue="200"
							:size="elementsHeight"
						/>
					</b-field>
					<hr />
					<CustomTitleLight titleText="Cholesterol" />
					<b-field
						type="is-danger"
						grouped
						is-3
						label="Have you ever been treated for or taken medication for high cholesterol?"
					>
						<b-radio-button
							v-model="highCholesterol"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>

						<b-radio-button
							v-model="highCholesterol"
							:size="elementsHeight"
							native-value="no"
							type="is-primary  is-outlined"
						>
							<span>No</span>
						</b-radio-button>
					</b-field>
					<b-field v-if="highCholesterol === 'yes'">
						<template #label>
							Please enter your most recent cholesterol level
						</template>
					</b-field>
					<b-field v-if="highCholesterol === 'yes'">
						<CustomInput
							customClassvalue="w-300 p-100 has-text-primary has-text-center"
							addonLabelLeft="Cholesterol level:"
							addonLabelLeftClass="labelLeftClass"
							addonLabelRight="mg/dl"
							inputPlaceholder="e.g. 200"
							minValue="0"
							maxValue="300"
							:size="elementsHeight"
						/>
					</b-field>
					<b-field v-if="highCholesterol === 'yes'">
						<CustomInput
							customClassvalue="w-300 p-120 has-text-primary has-text-center"
							addonLabelLeft="Cholesterol / HDL ratio:"
							addonLabelRight=""
							inputPlaceholder="e.g. 3.5"
							minValue="0"
							maxValue="200"
							:size="elementsHeight"
						/>
					</b-field>
					<hr />
					<CustomTitleLight titleText="Driving History" />
					<b-field
						type="is-danger"
						grouped
						is-3
						label="Have you ever held a valid Canadian driver's license?"
					>
						<b-radio-button
							v-model="drivingHistory"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>

						<b-radio-button
							v-model="drivingHistory"
							:size="elementsHeight"
							native-value="no"
							type="is-primary  is-outlined"
						>
							<span>No</span>
						</b-radio-button>
					</b-field>
					<b-field
						v-if="drivingHistory === 'yes'"
						type="is-danger"
						grouped
						:custom-class="is - 5"
						label="Have you had more than one accident?"
					>
						<b-radio-button
							v-model="moreThanOneAccident"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>

						<b-button
							type="is-ghost has-text-grey"
							:size="size"
							v-if="moreThanOneAccident === 'yes'"
							>in</b-button
						>
						<CustomDatePicker
							v-if="moreThanOneAccident === 'yes'"
							:size="elementsHeight"
							inputPlaceholder="MM/YYYY"
							labelText="Violation Month"
							:min="minDate"
							:max="maxDate"
							datePickerType="month"
							:customClassvalue="['w-210', 'is-align-content-flex-start']"
						/>

						<b-radio-button
							v-model="moreThanOneAccident"
							:size="elementsHeight"
							native-value="no"
							type="is-primary  is-outlined"
						>
							<span>No</span>
						</b-radio-button>
					</b-field>

					<b-field
						v-if="drivingHistory === 'yes'"
						type="is-danger"
						grouped
						is-3
						label="Have you received any moving violations/tickets (ie. not parking tickets) in the last 5 years?"
					>
						<b-radio-button
							v-model="movingViolations"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>

						<b-radio-button
							v-model="movingViolations"
							:size="elementsHeight"
							native-value="no"
							type="is-primary  is-outlined"
						>
							<span>No</span>
						</b-radio-button>
					</b-field>
					<b-field
						grouped
						:custom-class="is - 3"
						v-if="movingViolations === 'yes'"
					>
						<b-field>
							<CustomInput
								customClassvalue="w-290 has-text-primary has-text-left"
								addonLabelRight="ticket"
								inputPlaceholder="e.g. 1"
								minValue="0"
								maxValue="300"
								:size="elementsHeight"
							/>
						</b-field>
						<b-button type="is-ghost has-text-grey" :size="size">in</b-button>
						<b-field>
							<CustomDatePicker
								:size="elementsHeight"
								inputPlaceholder="MM/YYYY"
								labelText="Violation Month"
								:min="minDate"
								:max="maxDate"
								datePickerType="month"
								customClassvalue="w-210 has-text-primary has-text-left"
							/>
						</b-field>
					</b-field>
					<hr />
					<CustomTitleLight titleText="Family Medical History" />
					<b-field
						type="is-danger"
						grouped
						is-3
						label="Has anyone in your immediate family been diagnosed with cardiovascular disease (heart attack or stroke), cancer, diabetes or kidney disease, before the age of 70?"
					>
						<b-radio-button
							v-model="familyMedicalHistory"
							:size="elementsHeight"
							native-value="yes"
							type=" is-primary is-outlined"
							outlined
						>
							<span>Yes</span>
						</b-radio-button>

						<b-radio-button
							v-model="familyMedicalHistory"
							:size="elementsHeight"
							native-value="no"
							type="is-primary is-outlined"
							outlined
						>
							<span>No</span>
						</b-radio-button>
					</b-field>
					<div class="box col-4" v-if="familyMedicalHistory === 'yes'">
						<b-field>
							<template #label>
								At what age was your brother diagnosed?
							</template>
							<b-field>
								<CustomInput
									customClassvalue="w-290 has-text-primary has-text-left"
									addonLabelRight="years"
									inputPlaceholder="e.g. 65"
									minValue="0"
									maxValue="100"
									:size="elementsHeight"
								/>
							</b-field>
						</b-field>
					</div>

					<div class="has-text-centered">
						<b-button type="is-primary" :size="size">Next Step</b-button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CustomDatePicker from '../CustomDatePicker.vue';
	import CustomInput from '../CustomInput.vue';
	// import CustomRadioButton from '../CustomRadioButton.vue';
	// import CustomRadioButtonSmoker from '../CustomRadioButtonSmoker.vue';
	import CustomTitleLight from '../CustomTitleLight.vue';
	// import NumberInput from '../NumberInput.vue';
	export default {
		name: 'CriticalIllness',
		props: {
			msg: String,
		},
		components: {
			CustomInput,
			CustomDatePicker,
			// CustomRadioButton,
			// CustomRadioButtonSmoker,
			// NumberInput,
			CustomTitleLight,
		},
		data() {
			const today = new Date();
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
				labelPosition: 'on-border',
				firstClass: 'has-text-primary',
				secondClass: 'has-text-secondary',
				size: 'is-medium',
				radioWeight: 'lbs',
				familyMedical: 'no',
				tobaccoUse: ['others'],
				highBloodPressure: 'no',
				highCholesterol: 'no',
				drivingHistory: 'no',
				familyMedicalHistory: 'no',
				movingViolations: 'no',
				moreThanOneAccident: 'no',
				inputModel: '',
				radioButton: '',
				rightIcon: 'mail',
				value: '',
				rawValue: '',
				inputMask: {
					numeral: true,
					numeralPositiveOnly: true,
					prefix: ' ft',
					rawValueTrimPrefix: true,
				},
				inputMaskPhone: {
					blocks: [4, 3, 4],
					delimiters: [') -', '-', '-'],
					numericOnly: true,
					prefix: '(',
					noImmediatePrefix: true,
				},
				inputAttr: {
					placeHolder: 'e.g.5',
				},
				masks: {
					creditCard: {
						creditCard: true,
						// onValueChanged: function (e) {
						// 	e.target = { value: '5100-1234', rawValue: '51001234' }
						// },
					},
					dateField: {
						date: true,
						delimiter: '/',
						datePattern: ['d', 'm', 'Y'],
					},
					monthField: {
						date: true,
						delimiter: '/',
						datePattern: ['m', 'Y'],
					},
					phone: { phone: true, phoneRegionCode: '{country}' },
					numeral: {
						numeral: true,
						numeralThousandsGroupStyle: 'thousand',
						prefix: '$ Prefix ',
						signBeforePrefix: true,
						tailPrefix: true,
					},
					postalCode: {
						delimiters: ['  '],
						blocks: [3,3],
						uppercase: true,
						formatted: true,
						pattern: /[0-9]/ ,
					},
					custom: {
						delimiters: ['-', '-', '-'],
						blocks: [3, 3, 4],
						numericOnly: true,
						prefix: 'PREFIX',
						uppercase: true,
						signBeforePrefix: true,
					},
				},
			};
		},
		computed: {
			classes() {
				return `${this.firstClass} ${this.secondClass}`;
			},
			elementsHeight() {
				return `${this.size}`;
			},
		},
		methods: {
			onInput(event) {
				this.rawValue = event.target._vCleave.getRawValue();
				this.value = event.target._vCleave.getFormattedValue();
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card {
		margin: 40px 0px;
	}
	.w-100 {
		width: 100px !important;
		max-width: 100px !important;
	}
	.w-120 {
		width: 120px !important;
		max-width: 120px !important;
	}
	.w-210 {
		width: 210px !important;
		max-width: 210px !important;
	}
	.w-290 {
		width: 300px !important;
		max-width: 300px !important;
	}
	.labelLeftClass {
		width: 100px;
		max-width: 100px !important;
	}
	.p-60 input {
		padding-left: 100px;
	}
	.p-100 input {
		padding-left: 150px;
	}
	.p-120 input {
		padding-left: 215px;
	}
	/* .p-120 input:hover{
			padding-left: 15px;
		}
		.p-120 input:active{
			padding-left: 15px;
		} */
	.w-300 {
		width: 320px !important;
		max-width: 320px !important;
		text-align: center;
	}
</style>
