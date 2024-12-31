<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { moveRight, moveLeft, moveUp, moveDown } from '../utilities/moveSet';
import { ghost } from '../utilities/ghost';
import { findTarget } from '../utilities/findTarget';

let game: Ref<string> =ref(
`----------------------
|....................|
|.X..................|
|..|.................|
|..|.......----------|
|..|.......|.........|
|..----....|.........|
|...................Z|
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
    if(e.key === "ArrowDown") {
      parsedGame.value = moveDown(parsedGame.value, playerLocation)
    }
    
    if(e.key === "ArrowUp") {
      parsedGame.value = moveUp(parsedGame.value, playerLocation)
    }
    
    if(e.key === "ArrowLeft") {
      parsedGame.value = moveLeft(parsedGame.value, playerLocation)
    }
    
    if(e.key === "ArrowRight") {
      parsedGame.value = moveRight(parsedGame.value, playerLocation)
    }
    playerLocation = findTarget(parsedGame.value, "X")
    console.log(e.key) 
    
})

const roadblocks = ["|", "-"]

const element = {
  class: "bg-red-500"
}

let checker = (e: string) => {
  if(e === ".") {
    element.class = "bg-white"
  } else if (e === "X") {
    element.class = "bg-green-500"
  } else if(roadblocks.includes(e)) {
    element.class = "bg-red-500"
  } else if(e === 'Z') {
    element.class = "bg-violet-500"
  }
  return element
}

findTarget(parsedGame.value, "X")
</script>

<template>
  <div class="flex flex-col h-full pt-10 items-center">
    <div class="flex justify-around w-2/12" v-for="line in parsedGame">
      <div class="" v-for="letter in line">
        <p class="size-4"  v-bind="checker(letter)">
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