<template>
	<div class="hello">
		<!-- <h1>{{ msg }}</h1> -->
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<a href="#">
						<span class="icon is-small">
							<i class="fas fa-home" aria-hidden="true"></i>
						</span>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span class="icon is-small">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						<span>Critical Illness</span>
					</a>
				</li>
				<li class="is-active">
					<a href="#">
						<span class="icon is-small">
							<i class="fas fa-thumbs-up" aria-hidden="true"></i>
						</span>
						<span>Get Quotes</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'SecondaryHeader',
		props: {
			msg: String,
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb{
    margin: 40px 0px;
}
</style>
