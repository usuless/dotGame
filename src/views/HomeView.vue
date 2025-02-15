<script setup lang="ts">
import GameRun from '@/components/GameRun.vue';
import SecondGame from '@/components/secondGame/SecondGame.vue';
import ThirdGame from '@/components/thirdGame/ThirdGame.vue';


</script>
<template>
<h1 class="text-5xl flex flex-col items-center mt-5">.GAME</h1>
<nav>
        <button @click="$emit('map', GameRun)">Game 1</button>
        <button @click="$emit('map', SecondGame)">Game 2</button>
        <button @click="$emit('map', ThirdGame)">Game 3</button>
</nav>
</template>