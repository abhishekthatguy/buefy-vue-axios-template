<template>
	<div>
		<template>
			<!-- <div class="field" >
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="number" :placeholder="inputPlaceholder">
    <span class="icon is-small is-left has-text-black is-6 ">
     {{addonLabelLeft}}
    </span>
    <span class="icon is-small is-right has-text-black is-6">
  {{addonLabelRight}}
    </span>
  </p>
</div> -->


		
				

			<b-field custom-class="p-relative">
				<p class="control" v-if="addonLabelLeft">
					<b-button
						:label="addonLabelLeft"
						:size="size"
						class="inputLeftAddonText has-text-black"
					/>
				</p>
				<b-numberinput
					:controls="false"
					:placeholder="inputPlaceholder"
					:size="size"
					:custom-class="customClassvalue"
					:min="minValue"
					:max="maxValue"
					focused
				/>
				<p class="control">
					<b-button
						:label="addonLabelRight"
						:size="size"
						class="inputRightAddonText has-text-black"
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
			size: String,
			universalClass:String,
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
