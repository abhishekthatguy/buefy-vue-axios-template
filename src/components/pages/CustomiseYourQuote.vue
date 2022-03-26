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
					<b-field grouped>
						<b-field class="heightColumn">
							<template #label>
								Last Tobacco Used
								<span class="has-text-primary is-underlined is-size-6"
									>(Enter in format (mm-yyyy )</span
								>
							</template>
							<b-field grouped custom-class="classes">
								<b-field>
									<CustomInput
										:customClassvalue="classes"
										:mask="masks.monthField"
										:inputAttr="inputAttr"
										:size="elementsHeight"
										placeHolder="`MM/YYYY`"
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
									<CustomInput
										:customClassvalue="classes"
										:mask="masks.dateField"
										:inputAttr="inputAttr"
										:size="elementsHeight"
										placeHolder="`DD/MM/YYYY`"
									/>
								</b-field>
							</b-field>
						</b-field>
						<b-field class="heightColumn">
							<template #label>
								Password
								<span class="has-text-primary is-underlined is-size-6"
									>(Enter Your password )</span
								>
							</template>
							<b-field grouped custom-class="classes">
								<b-field>
									<b-input
										:custom-class="['has-text-primary', 'has-text-left']"
										placeholder="Password"
										v-model="password"
										@input.native="onInput"
										:size="size"
										type="password"
										password-reveal
									>
									</b-input>
								</b-field>
							</b-field>
						</b-field>
					</b-field>
					<b-field grouped>
						<b-field class="heightColumn">
							<template #label>
								Coverage Amount
								<span class="has-text-primary is-underlined is-size-6"
									>(With Thousands Separator )</span
								>
							</template>
							<b-field grouped custom-class="classes">
								<b-field>
									<b-input
										:custom-class="['has-text-primary', 'has-text-right-hover']"
										placeholder="`Coverage Amount`"
										v-model="amount"
										v-maska="'$ ##,##,###'"
										@input.native="onInput"
										:size="size"
										type="is-primary is-outlined"
									>
									</b-input>
								</b-field>
							</b-field>
						</b-field>
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
										placeHolder="`Phone`"
									/>
								</b-field>
							</b-field>
						</b-field>
						<b-field class="heightColumn">
							<template #label>
								Postal Code
								<span class="has-text-primary is-underlined is-size-6"
									>(Enter in format (A1A 1A1 )</span
								>
							</template>
							<b-field grouped custom-class="classes">
								<b-field>
									<b-input
										:custom-class="classes"
										placeholder="A1A 1A1"
										v-model="value"
										v-maska="'A#A #A#'"
										@input.native="onInput"
										:size="size"
										type="is-primary is-outlined"
									>
									</b-input>
								</b-field>
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
									custom-class="is-3"
									:mask="masks.heightInFeet"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`e.g. 5`"
								/>
							</b-field>
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									:mask="masks.heightInInch"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`e.g. 8`"
								/>
							</b-field>
						</b-field>
					</b-field>
					<b-field type="is-primary" grouped is-3 label="Your Weight">
						<CustomInput
							:customClassvalue="classes"
							:mask="masks.weight"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`e.g. 120`"
						/>
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
								<CustomInput
									:customClassvalue="classes"
									:mask="masks.lastUsedCigaretteMonth"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`MM/YYYY`"
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
									:customClassvalue="classes"
									:mask="masks.CigarettFigure"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`Figures Only`"
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
								<CustomInput
									:customClassvalue="classes"
									:mask="masks.lastUsedCigarMonth"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`MM/YYYY`"
								/>
							</b-field>
						</b-field>
						<b-field v-if="option === 'cigar'">
							<template #label>
								On average, how many cigars per day do/did you smoke?
							</template>
							<b-field>
								<CustomInput
									:customClassvalue="classes"
									:mask="masks.lastUsedCigarMonth"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`MM/YYYY`"
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
							:customClassvalue="classes"
							:mask="masks.bloodPressureSys"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`e.g.120`"
						/>
					</b-field>
					<b-field v-if="highBloodPressure === 'yes'">
						<CustomInput
							:customClassvalue="classes"
							:mask="masks.bloodPressureDis"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`e.g.80`"
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
							:customClassvalue="classes"
							:mask="masks.cholesterolLevel"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`e.g.200`"
						/>
					</b-field>
					<b-field v-if="highCholesterol === 'yes'">
						<CustomInput
							:customClassvalue="classes"
							:mask="masks.cholesterolRatio"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`e.g. 3.5`"
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
						<CustomInput
							v-if="moreThanOneAccident === 'yes'"
							:customClassvalue="classes"
							:mask="masks.drivingHistoryAccident"
							:inputAttr="inputAttr"
							:size="elementsHeight"
							placeHolder="`MM/YYYY`"
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
								:customClassvalue="classes"
								:mask="masks.movingViolations"
								:inputAttr="inputAttr"
								:size="elementsHeight"
								placeHolder="`e.g.1`"
							/>
						</b-field>
						<b-button type="is-ghost has-text-grey" :size="size">in</b-button>
						<b-field>
							<CustomInput
								:customClassvalue="classes"
								:mask="masks.movingViolationsDate"
								:inputAttr="inputAttr"
								:size="elementsHeight"
								placeHolder="`MM/YYYY`"
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
									:customClassvalue="classes"
									:mask="masks.familyMedicalHistory"
									:inputAttr="inputAttr"
									:size="elementsHeight"
									placeHolder="`e.g. 65`"
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
	// import CustomDatePicker from '../CustomDatePicker.vue';
	import CustomInput from '../CustomInput.vue';
	// import CustomRadioButton from '../CustomRadioButton.vue';
	// import CustomRadioButtonSmoker from '../CustomRadioButtonSmoker.vue';
	import CustomTitleLight from '../CustomTitleLight.vue';
	// import NumberInput from '../NumberInput.vue';
	import { maska } from 'maska';
	export default {
		name: 'CriticalIllness',
		props: {
			msg: String,
		},
		components: {
			CustomInput,
			// CustomDatePicker,
			// CustomRadioButton,
			// CustomRadioButtonSmoker,
			// NumberInput,
			CustomTitleLight,
		},
		directives: { maska },
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
					amount: {
						numeralOnly: true,
						numeralThousandsGroupStyle: 'thousand',
						prefix: '$',
						delimiter: ',',
					},
					postalCode: {
						delimiters: ['  '],
						blocks: [3, 3],
						uppercase: true,
						formatted: true,
						pattern: /[0-9]/,
					},
					custom: {
						delimiters: ['-', '-', '-'],
						blocks: [3, 3, 4],
						numericOnly: true,
						prefix: 'PREFIX',
						uppercase: true,
						signBeforePrefix: true,
					},
					heightInFeet: {
						delimiters: [''],
						blocks: [9],
						numeric: true,
						prefix: 'ft',
						tailPrefix: false,
						inputSize: 'width:150px',
						rightIcon:'lock',
						leftIcon:'lock'
					},
					heightInInch: {
						delimiters: [''],
						blocks: [2],
						numericOnly: true,
						prefix: 'in',
						tailPrefix: true,
						inputSize: 'width:150px',
					},
					weight: {
						delimiters: [''],
						blocks: [4],
						numericOnly: true,
						inputSize: 'width:150px',
					},
					lastUsedCigaretteMonth: {
						date: true,
						delimiter: '/',
						datePattern: ['m', 'Y'],
						inputSize: 'width:170px',
						dateMin: '2000-01-01',
						dateMax: this.today,
					},
					CigarettFigure: {
						inputSize: 'width:330px',
					},
					lastUsedCigarMonth: {
						date: true,
						delimiter: '/',
						datePattern: ['m', 'Y'],
						inputSize: 'width:170px',
					},
					CigarFigure: {
						inputSize: 'width:330px',
						blocks: [7],
						numericOnly: true,
					},
					bloodPressureSys: {
						delimiters: [': ', ''],
						blocks: [8, 3],
						numericOnly: true,
						prefix: 'Systolic',
						// tailPrefix: true,
						inputSize: 'width:330px',
					},
					bloodPressureDis: {
						delimiters: [': ', ''],
						blocks: [8, 3],
						numericOnly: true,
						prefix: 'Distolic',
						// tailPrefix: true,
						inputSize: 'width:330px',
					},
					cholesterolLevel: {
						delimiters: [' : ', ''],
						blocks: [16, 8],
						numericOnly: true,
						prefix: 'Cholestrol-level',
						// tailPrefix: true,
						inputSize: 'width:330px',
					},
					cholesterolRatio: {
						delimiters: [': ', ''],
						blocks: [16, 3],
						numericOnly: true,
						prefix: 'Cholestrol-Ratio',
						// tailPrefix: true,
						inputSize: 'width:330px',
					},
					drivingHistoryAccident: {
						date: true,
						delimiter: '/',
						datePattern: ['m', 'Y'],
						inputSize: 'width:170px',
					},
					movingViolations: {
						blocks: [5],
						numericOnly: true,
						inputSize: 'width:330px',
					},
					movingViolationsDate: {
						date: true,
						delimiter: '/',
						datePattern: ['m', 'Y'],
						inputSize: 'width:170px',
					},
					familyMedicalHistory: {
						blocks: [1],
						numericOnly: true,
						inputSize: 'width:330px',
					},
				},
			};
		},
		computed: {
			classes() {
				return `${this.firstClass} ${this.secondClass} is-1`;
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
