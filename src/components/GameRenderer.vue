<script setup lang="ts">
import { fieldCheck } from '../utilities/fieldChecker';
import WallOfFame from './WallOfFame.vue';

const {gameMap, isGameActive, db, score, isGameFinished} = defineProps<{
    gameMap: string[],
    isGameActive: boolean,
    db: Object,
    score: number
    isGameFinished: boolean
}>()

</script>
<template>
  <div class="flex flex-col mt-5" v-if="!isGameFinished">
      <div :class="{'bg-black opacity-35': !isGameActive}" class="flex justify-around w-full" v-for="line in gameMap">
        <div class="" v-for="letter in line">
          <p class="lg:size-4 size-2.5"  v-bind="fieldCheck(letter)">
          </p>
        </div>
      </div>
  </div>
  <div class="" v-else>
    <WallOfFame :data="db" :points="score"/>
  </div>

</template>