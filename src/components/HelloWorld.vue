<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { moveRight, moveLeft, moveUp, moveDown } from '../utilities/moveSet';
import { findTarget } from '../utilities/findTarget';
import { fieldCheck } from '../utilities/fieldChecker';
import { placePoint } from '../utilities/placePoint';

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
})

parsedGame.value = placePoint(parsedGame.value)
findTarget(parsedGame.value, "X")
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
    </p>
  </div>
</template>

<style scoped>
</style>