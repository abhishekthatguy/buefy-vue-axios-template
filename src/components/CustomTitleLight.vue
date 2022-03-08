<template>
	<h3 class="title customTileLight">{{ titleText }}</h3>
</template>

<script>
	export default {
		name: 'CustomTitleLight',
		props: {
			titleText: String,
		},
	};
</script>
<style>
	.title.customTileLight {
		font-size: 26px;
		color: #b4b7b8;
		font-weight: 600;
		text-align: left;
		margin-bottom: 20px;
	}
</style>
