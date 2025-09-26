<script setup lang="ts">
import '@sync-skeleton/core/skeleton.css'
import Card from './components/Card.vue'
</script>

<template>
  <div class="container">
    <Card />
    <div class="card2">
      <Card />
    </div>
    <div class="card3">
      <Card />
    </div>
  </div>
</template>

<style scoped>
:global(:root) {
  color-scheme: light dark;
  background-color: light-dark(white, hsl(0 0% 10%));
  color: light-dark(black, white);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card2 {
  margin-left: 16px;
}

.card3 {
  margin-left: 32px;
}
</style>
