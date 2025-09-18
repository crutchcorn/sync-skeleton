<script setup lang="ts">
import { useSkeletonSetup } from '@sync-skeleton/vue'
import '@sync-skeleton/core/skeleton.css'
import Card from './components/Card.vue'

useSkeletonSetup()
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
