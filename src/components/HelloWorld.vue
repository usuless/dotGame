<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { moveRight, moveLeft, moveUp, moveDown } from '../utilities/moveSet';
import { findTarget } from '../utilities/findTarget';
import { fieldCheck } from '../utilities/fieldChecker';
import { placePoint } from '../utilities/placePoint';
import { setTimer } from '../utilities/timer';

let game: Ref<string> =ref(
`----------------------
|....................|
|.X..................|
|..|.................|
|..|.......----------|
|..|.......|.........|
|..----....|.........|
|....................|
|....................|
|...|........--------|
|...|............|...|
|...|............|...|
|...|................|
|....................|
----------------------
`)

let parsedGame: Ref<string[]> = ref(game.value.split("\n"))
let playerLocation: number[] = findTarget(parsedGame.value, "X")
let points: Ref<number> = ref(0)

// PRZENIEŚĆ DO KEYHANDLERA

document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case "ArrowDown":
        parsedGame.value = moveDown(parsedGame.value, playerLocation)
        break;
      case "ArrowUp":
        parsedGame.value = moveUp(parsedGame.value, playerLocation)
        break
      case "ArrowLeft":
        parsedGame.value = moveLeft(parsedGame.value, playerLocation)
        break
      case "ArrowRight":
        parsedGame.value = moveRight(parsedGame.value, playerLocation)
        break
      }  
      playerLocation = findTarget(parsedGame.value, "X")
      if(pointLocation[0] === playerLocation[0] && pointLocation[1] === playerLocation[1]) {
          points.value ++
          parsedGame.value = placePoint(parsedGame.value)
          pointLocation = findTarget(parsedGame.value, "*")
        }
})

let timer = setTimer(20)

watchEffect(async () => {
  if(timer.isExpired.value) {
    console.log("DZIAŁO")
  }
})

parsedGame.value = placePoint(parsedGame.value)
let pointLocation = findTarget(parsedGame.value, "*")
</script>

<template>
  <div class="flex flex-col h-full pt-10 items-center">
    <div class="flex justify-around w-2/12" v-for="line in parsedGame">
      <div class="" v-for="letter in line">
        <p class="size-4"  v-bind="fieldCheck(letter)">
        </p>
      </div>
    </div>
    <p class="">
      {{ playerLocation }}
      {{ pointLocation }}
      {{ timer.seconds }}
    </p>
    <p>
      {{ points }}
    </p>
  </div>
</template>

<style scoped>
</style>