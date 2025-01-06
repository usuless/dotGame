<script setup lang="ts">
import { onMounted } from 'vue';
import Game from './components/Game.vue'

onMounted(() => {
  document.body.style.backgroundImage = 'url("/src/bg/background.svg")';
})
</script>

<template>
  <Game />
</template>

<style scoped>
body {
  @apply bg-cover bg-center
}
</style>
