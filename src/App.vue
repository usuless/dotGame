<script setup lang="ts">
import HomeView from './views/HomeView.vue';

</script>

<template>
  <div class="flex">
    <p class="text-4xl">.GAME</p>
    <div class="flex">
        <router-link to="/GameRun">GameRun</router-link>
        <router-link to="/SpeedGame">Speed</router-link>
        <router-link to="/IdkGame">AJ DONO</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<style scoped>
</style>
