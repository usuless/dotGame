<script setup lang="ts">
import { onMounted } from 'vue';
import HomeView from './components/HomeView.vue';

onMounted(() => {
  document.body.style.backgroundImage = 'url("/src/bg/background.svg")';
})
</script>

<template>
  <HomeView/>
</template>

<style scoped>
body {
  @apply bg-cover bg-center
}
</style>
