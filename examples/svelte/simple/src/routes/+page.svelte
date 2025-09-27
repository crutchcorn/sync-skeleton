<script lang="ts">
	import '@sync-skeleton/core/skeleton.css';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="container">
	<Card />
	<div class="card2">
		<Card dark />
	</div>
	<div class="card3">
		<Card class="orange-purple-loader" />
	</div>
</div>

<style scoped>
	:global(:root) {
		color-scheme: light dark;
		background-color: light-dark(white, hsl(0 0% 10%));
		color: light-dark(black, white);
		--skeleton-radius: 4px;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card2 {
		margin-left: 10rem;
	}

	.card3 {
		margin-left: 20rem;
	}
</style>
