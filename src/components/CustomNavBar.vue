<template>
	<b-navbar fixed-top type="is-mute" centered spaced shadow>
		<template #brand>
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<img
					src="https://staging.policyadvisor.ca/assets/static/policyadvisor-logo.7b22250.9920d8715fabfa333989f180a005bb5e.svg"
					alt="Policy advisor" class="paLogo"
				/>
			</b-navbar-item>
		</template>
		<template #start>
			<b-navbar-item href="#"> <h1 class="title has-text-primary is-4">Term Life Insurance Quote</h1> </b-navbar-item>
		</template>

		<template #end>
			<b-navbar-dropdown>
				<template #label>
					<img src="../assets/avtar.svg" alt="avatar" width="112" height="28" />
				</template>
				<b-navbar-item href="#"> Log in </b-navbar-item>
				<b-navbar-item href="#"> Log out </b-navbar-item>
			</b-navbar-dropdown>
		</template>
	</b-navbar>
</template>

<style>
.paLogo{
  width: 100%;
  height:auto;
}
	@media (min-width: 1024px) {
	}
</style>

<script>
	export default {
		name: 'CustomNavBar',
	};
</script>
