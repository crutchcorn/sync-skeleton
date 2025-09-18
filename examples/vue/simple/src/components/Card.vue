<script setup lang="ts">
import { useSkeleton } from '@sync-skeleton/vue';

const image = useSkeleton()
const lineOne = useSkeleton()
const lineTwo = useSkeleton()
const lineThree = useSkeleton()
const lineFour = useSkeleton()
</script>

<template>
  <div class="cardContainer">
    <div ref="image" class="loading-skeleton image" />
    <div class="content">
      <div ref="lineOne" class="loading-skeleton lineHeight lineOne" />
      <div ref="lineTwo" class="loading-skeleton lineHeight lineTwo" />
      <div ref="lineThree" class="loading-skeleton lineHeight lineThree" />
      <div ref="lineFour" class="loading-skeleton lineHeight lineFour" />
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.image {
  height: 104px;
  width: 152px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lineHeight {
  flex-basis: 25%;
}

.lineOne {
  width: 138px;
}

.lineTwo {
  width: 48px;
}

.lineThree {
  width: 64px;
}

.lineFour {
  width: 80px;
}
</style>
