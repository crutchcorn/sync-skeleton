<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  dark: Boolean,
})
</script>

<template>
  <div class="cardContainer" :class="{ dark: props.dark }">
    <div class="loading-skeleton image" />
    <div class="content">
      <div class="loading-skeleton lineHeight lineOne">
        lorem ipsum dolor sit amet
      </div>
      <div class="loading-skeleton lineHeight lineTwo" />
      <footer class="footer">
        <div class="loading-skeleton circle" />
        <div class="loading-skeleton lineHeight lineFour" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.cardContainer {
  display: inline-flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  &.dark {
    color-scheme: dark;
    background-color: hsl(0 0% 10% / 100%);
  }
}

.image {
  height: 104px;
  width: 152px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.lineHeight {
  flex-basis: 25%;
}

.lineOne {
  width: auto;
}

.lineTwo {
  width: 48px;
}

.lineFour {
  flex-basis: 75%;
}

.footer {
  display: flex;
  flex-direction: row;
  width: 120px;
  gap: 0.5rem;
  margin-block-start: auto;
}

.circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
</style>
