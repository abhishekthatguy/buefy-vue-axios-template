/* eslint-disable */
<template>
	<section id="testcomponent" class="section">
		<div class="container has-text-left">
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
					<CustomTitleLight titleText="Your Build" />
					<b-field class="heightColumn">
						<template #label>
							Your Height
							<span class="has-text-primary is-underlined is-size-6"
								>(Enter in cms)</span
							>
						</template>
						<b-field grouped custom-class="is-2 has-text-left">
							<b-field>
								<NumberInput
									customClassvalue="w-120"
									addonLabelRight="ft"
									inputPlaceholder="e.g. 5"
									minValue="0"
									maxValue="10"
									:size="elementsHeight"
									inputValue="{}"
								/>
							</b-field>
							<b-field>
								<NumberInput
									customClassvalue="w-120"
									addonLabelRight="in"
									inputPlaceholder="e.g. 9"
									minValue="0"
									maxValue="60"
									:size="elementsHeight"
								/>
							</b-field>
						</b-field>
					</b-field>
					<b-field type="is-danger" grouped is-3 label="Your Weight">
						<b-input
							:size="elementsHeight"
							custom-class="has-text-danger is-2 w-120"
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
						<div class="columns is-3">
							<div class="column">
								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="cigrettes"
									class="w-210"
									type="is-outlined"
								>
									<span>Cigrettes</span>
								</b-radio-button>

								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="cigar"
									type="is-primary  is-outlined"
									class="w-210"
								>
									<span>Cigar</span>
								</b-radio-button>
								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="pipes"
									type="is-primary  is-outlined"
									class="w-210"
								>
									<span>Pipes</span>
								</b-radio-button>
							</div>
							<div class="column">
								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="chewingTobacco"
									type="is-primary  is-outlined"
									class="w-210"
								>
									<span>Chewing tobacco</span>
								</b-radio-button>
								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="necotine"
									type="is-primary  is-outlined"
									class="w-210"
								>
									<span>Necotine patch/gum</span>
								</b-radio-button>
								<b-radio-button
									v-model="tobaccoUse"
									:size="elementsHeight"
									native-value="others"
									type="is-primary  is-outlined"
									class="w-210"
								>
									<span>Others</span>
								</b-radio-button>
							</div>
						</div>
					</b-field>
					<b-field v-if="tobaccoUse === 'cigrettes'">
						<template #label>
							When was the last time you used cigarettes?
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
								customClassvalue="w-210"
							/>
						</b-field>
					</b-field>
					<b-field v-if="tobaccoUse === 'cigrettes'">
						<template #label>
							On average, how many cigarettes per day do/did you smoke?
						</template>
						<b-field>
							<NumberInput
								customClassvalue="w-290"
								addonLabelRight="per day"
								inputPlaceholder="Figures Only"
								minValue="0"
								maxValue="60"
								:size="elementsHeight"
							/>
						</b-field>
					</b-field>

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
						<NumberInput
							customClassvalue="w-290 p-60"
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
						<NumberInput
							customClassvalue="w-290 p-60"
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
						<NumberInput
							customClassvalue="w-290 p-100"
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
						<NumberInput
							customClassvalue="w-290 p-120"
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
						is-3
						label="Have you had more than one accident?"
					>
						<b-radio-button
							v-model="radioWeight"
							:size="elementsHeight"
							native-value="Nope"
							type=" is-primary-outlined  is-outlined"
						>
							<span>Yes</span>
						</b-radio-button>
						<b-field label="in"></b-field>
						<b-field>
							<NumberInput
								customClassvalue="w-290"
								inputPlaceholder="MM/YYYY"
							/>
							<CustomDatePicker labelText="Date of Birth" />
						</b-field>
						<b-radio-button
							v-model="radioButton"
							:size="elementsHeight"
							native-value="Yep"
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
						custom-class="is-3"
						v-if="movingViolations === 'yes'"
					>
						<b-field>
							<NumberInput
								customClassvalue="w-290"
								addonLabelRight="ticket"
								inputPlaceholder="e.g. 1"
								minValue="0"
								maxValue="300"
								:size="elementsHeight"
							/>
						</b-field>
						<b-field label="in"></b-field>
						<b-field>
							<NumberInput
								customClassvalue="w-290"
								inputPlaceholder="MM/YYYY"
							/>
							<CustomDatePicker labelText="" />
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
								<NumberInput
									customClassvalue="w-290"
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
				<div class="column"></div>
			</div>
		</div>
	</section>
</template>
<script>
	// import CustomInput from './CustomInput.vue';
	import NumberInput from './NumberInput.vue';
	import CustomDatePicker from './CustomDatePicker.vue';
	import CustomTitleLight from './CustomTitleLight.vue';

	export default {
		name: 'CustomizeQuoteComponent',
		props: {
			year: String,
		},
		components: {
			// CustomInput,
			NumberInput,
			CustomDatePicker,
			CustomTitleLight,
		},
		data() {
			const today = new Date();

			return {
				// date: new Date(),
				date: '',
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
				labelPosition: 'on-border',
				firstClass: 'has-text-primary',
				size: 'is-medium',
				radioWeight: 'lbs',
				familyMedical: 'no',
				tobaccoUse: 'others',
				highBloodPressure: 'no',
				highCholesterol: 'no',
				drivingHistory: 'no',
				familyMedicalHistory: 'no',
				movingViolations: 'no',
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
	};
</script>
<style>
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
		margin: 1rem 0rem 1rem 0rem;
	}
	.w-290 {
		width: 300px !important;
		max-width: 300px !important;
		/* margin: 1rem 0rem 1rem 0rem; */
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
</style>
