<script setup lang="ts">
import { fieldCheck } from '../utilities/fieldChecker';

const {gameMap, score, isGameActive} = defineProps<{
    gameMap: string[],
    score: number,
    isGameActive: boolean
}>()

const model = defineModel("isGameFinished")

</script>
<template>
  <div class="flex flex-col h-full pt-10 items-center">
      <div v-if="!model" :class="{'bg-black opacity-35': !isGameActive}" class="flex justify-around w-2/12" v-for="line in gameMap">
        <div class="" v-for="letter in line">
          <p class="size-4"  v-bind="fieldCheck(letter)">
          </p>
        </div>
      </div>
      <div v-else class="">
        <p class="text-2xl">Gratulacje! Twój wynik to:</p>
      </div>
  </div>
</template>