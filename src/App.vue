<script setup lang="ts">
import { ref } from 'vue';
import GameRun from './components/GameRun.vue';
import HomeView from './views/HomeView.vue';

let router = ref(GameRun)

// wyłączenie scrolla na strzałkach
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
</script>
<template>
<HomeView @map="(e:any) => router = e" />
<component :is="router" />
</template>
<style scoped>
</style>
