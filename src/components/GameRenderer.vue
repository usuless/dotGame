<script setup lang="ts">
import { fieldCheck } from '../utilities/fieldChecker';

const {gameMap, score, isGameActive} = defineProps<{
    gameMap: string[],
    score: number,
    isGameActive: boolean
}>()

</script>
<template>
  <div class="flex flex-col h-full pt-10 items-center">
    <!-- <Timer v-model:points="points" v-model:is-game-on="isGameOn"/> -->
      <div :class="{'bg-black opacity-35': !isGameActive}" class="flex justify-around w-2/12" v-for="line in gameMap">
        <div class="" v-for="letter in line">
          <p class="size-4"  v-bind="fieldCheck(letter)">
          </p>
        </div>
      </div>
        <p class="text-5xl mt-5">
          {{ score }}
        </p>
    <p class="mt-5" v-if="!isGameActive">Naciśnij &#8592; &#8593;  &#8594; &#8595;, żeby grać</p>
  </div>
</template>