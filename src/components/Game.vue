<script setup lang="ts">
import { reactive, ref} from 'vue';
import type { Ref } from 'vue';
import UIFx from 'uifx';
import { handleKey } from '../utilities/keyHandler';
import { findTarget } from '../utilities/findTarget';
import { fieldCheck } from '../utilities/fieldChecker';
import { placePoint } from '../utilities/placePoint';
import { gameFile } from '../assets/game';
import sound from "../assets/sfx/sound.mp3"
import Timer from './Timer.vue';

let game: Ref<string> =ref(gameFile)
let parsedGame: Ref<string[]> = ref(game.value.split("\n"))
let playerLocation: number[] = findTarget(parsedGame.value, "X")
let points: Ref<number> = ref(0)
let pointSound = new UIFx(
  sound,
  {
    volume: 0.2,
    throttleMs: 0
  }
)

let isGameOn: Ref<boolean> = ref(false)
let wallpaper = reactive({
  class: "bg-black opacity-35"
})
let moves: string[] = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]

document.addEventListener('keydown', function(e) {
  if(isGameOn.value === false && moves.includes(e.key)) {
    isGameOn.value = true
    wallpaper.class = ""
  }
      parsedGame.value = handleKey(e.key, parsedGame.value, playerLocation)    

      playerLocation = findTarget(parsedGame.value, "X")
      if(pointLocation[0] === playerLocation[0] && pointLocation[1] === playerLocation[1]) {
          points.value ++
          pointSound.play()
          parsedGame.value = placePoint(parsedGame.value)
          pointLocation = findTarget(parsedGame.value, "*")
        }
})

parsedGame.value = placePoint(parsedGame.value)
let pointLocation = findTarget(parsedGame.value, "*")
</script>
<template>
  <div class="flex flex-col h-full pt-10 items-center">
    <Timer v-model:points="points" v-model:is-game-on="isGameOn"/>
      <div v-bind="wallpaper" class="flex justify-around w-2/12" v-for="line in parsedGame">
        <div class="" v-for="letter in line">
          <p class="size-4"  v-bind="fieldCheck(letter)">
          </p>
        </div>
      </div>
        <p class="text-5xl mt-5">
          {{ points }}
        </p>
    <p class="mt-5" v-if="!isGameOn">Naciśnij &#8592; &#8593;  &#8594; &#8595;, żeby grać</p>
  </div>
</template>