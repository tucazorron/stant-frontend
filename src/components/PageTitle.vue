<template>
	<h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
	name: 'PageTitle',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.title {
	font-size: 4rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
	color: #f40;
}
</style>