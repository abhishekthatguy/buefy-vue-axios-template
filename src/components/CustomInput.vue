<template>
	<div>
		<!-- custom-class="has-text-danger is-2 w-120" -->
		<section>
			<b-field
				type="is-danger"
				message="Please fill this in"
				grouped
				is-3
				label="ft"
				:label-position="labelPosition"
				custom-class="is-medium"
			>
			<template #append>
      <b-input-group-text><strong class="text-danger">Hello</strong></b-input-group-text>
    </template>
				<b-input
					size="is-medium"
					placeholder="e.g.5"
					icon="email"
					:icon-right="rightIcon"
					icon-right-clickable
					@icon-right-click="clearIconClick"
					v-model="inputModel"
					value="john@"
					maxlength="30"
					add-on="hello world"
					loading
				></b-input>
			</b-field>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'CustomInput',
		props: {
			labelText: String,
			radioObj: Object,
		},
		data() {
			return {
				inputModel:"",
				radioButton: '',
				labelPosition: 'inside',
				rightIcon:'mail'
			};
		},
	};
</script>
