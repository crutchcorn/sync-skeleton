<script setup lang="ts">
import '@sync-skeleton/core/skeleton.css'
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
    <Card />
    <div class="card2">
      <Card dark />
    </div>
    <div class="card3">
      <Card class="orange-purple-loader" />
    </div>
  </div>
</template>

<style scoped>
:global(:root) {
  color-scheme: light dark;
  background-color: light-dark(white, hsl(0 0% 10%));
  color: light-dark(black, white);
  --skeleton-radius: 4px;
}

.orange-purple-loader {
  --skeleton-base-color: tomato;
  --skeleton-highlight-color: darkred;
  --skeleton-base-color-dark: darkslateblue;
  --skeleton-highlight-color-dark: indigo;
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
