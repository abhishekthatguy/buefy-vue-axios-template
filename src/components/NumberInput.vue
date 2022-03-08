<template>
	<div>
		<template>
			<b-field custom-class="p-relative">
				<p class="control" v-if="addonLabelLeft">
					<b-button :label="addonLabelLeft" :size="size" class="inputLeftAddonText"/>
				</p>
				<b-numberinput
					:controls="false"
					:placeholder="inputPlaceholder"
					:size="size"
					custom-class="has-text-left tempClass"
					:class="customClassvalue"
					:min="minValue"
					:max="maxValue"
				/>
				<p class="control ">
					<b-button
						:label="addonLabelRight"
						:size="size"
						class="inputRightAddonText"
					/>
				</p>
			</b-field>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'NumberInput',
		props: {
			labelText: String,
			radioObj: Object,
			customClassvalue: String,
			addonLabelLeft: String,
			addonLabelRight: String,
			inputPlaceholder: String,
			minValue: String,
			maxValue: String,
			addonLabelLeftClass: String,
			size:String,
		},
		data() {
			return {
				inputModel: '',
				radioButton: '',
				labelPosition: 'inside',
				rightIcon: 'mail',
			};
		},
	};
</script>
<style>
	.prelative {
		position: relative !important;
	}
	/* .tempClass{
		padding: 0 50px !important;
	} */
</style>
