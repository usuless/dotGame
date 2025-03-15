<script setup lang="ts">
import Buttons from './Buttons.vue';
import GameRenderer from './GameRenderer.vue';
import MapSelector from './MapSelector.vue';
import Score from './Score.vue';
import Timer from "./Timer.vue"
import Captions from './Captions.vue';
import UIFx from 'uifx';
import sound from "../assets/sfx/sound.mp3"
import { handleKey } from '../utilities/keyHandler';
import { findTarget } from '../utilities/findTarget';
import { placePoint } from '../utilities/placePoint';
import { loadMap } from '../utilities/gameMap';
import { getData } from '../server/getData';
import { onMounted, ref} from 'vue';
import type { Ref } from 'vue';

const mapList = [1, 2, 3]
const defaultMap = loadMap(1);

let currentMap = ref<string[]>(defaultMap)
let isGameFinished = ref(false)
let isGameOn: Ref<boolean> = ref(false)

  
let mapGame: Ref<string[]> = ref(currentMap)
let playerLocation: number[] = findTarget(mapGame.value, "X")
let points: Ref<number> = ref(0)
  let pointSound = new UIFx(
    sound,
    {
      volume: 0.2,
      throttleMs: 0
    }
  )
    
const onGameRefresh = (mapId: number = 1) => {
  points.value = 0
  currentMap.value = loadMap(mapId);
  mapGame.value = placePoint(mapGame.value)
  playerLocation = findTarget(mapGame.value, "X")
  pointLocation = findTarget(mapGame.value, "*")
  isGameOn.value = false
  isGameFinished.value = false
  console.log(isGameFinished.value)
  
}

let moves: string[] = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]

// poruszanie się

const operation = (e: string) => {
  if (e === "Enter" && isGameFinished.value === false) {
    points.value = 0
    isGameOn.value = true
  }

  if (moves.includes(e) && isGameOn.value === true) {
    // rozpoczęcie gry
    mapGame.value = handleKey(e, mapGame.value, playerLocation)

    playerLocation = findTarget(mapGame.value, "X")
    // gracz znalazł punkt
    if (pointLocation[0] === playerLocation[0] && pointLocation[1] === playerLocation[1]) {
      points.value++
      pointSound.play()
      mapGame.value = placePoint(mapGame.value)
      pointLocation = findTarget(mapGame.value, "*")
    }
  }
  
}

document.addEventListener('keydown', function (e) {
  operation(e.key)  
})

const onGameEnd = () => {
  isGameFinished.value = true
  isGameOn.value = false
}

// server

let db = ref()

onMounted(() => {
  db.value = getData(db)
})

// lokalizacja gracza i punktu
mapGame.value = placePoint(mapGame.value)
let pointLocation = findTarget(mapGame.value, "*")
</script>
<template>
  <MapSelector @map-change="onGameRefresh" :map-list="mapList" />
  <div class="flex flex-col items-center">
    <Timer :is-game-on="isGameOn" :points="points" @end-of-the-game="onGameEnd" />
    <GameRenderer :game-map="currentMap" :is-game-active="isGameOn" :is-game-finished="isGameFinished" :score="points" :db="db" />
    <Score :score="points" :is-game-finished="isGameFinished" />
    <Buttons @key="operation"/>
    <Captions @newGame="onGameRefresh" :is-game-active="isGameOn" :is-game-finished="isGameFinished" />
  </div>
</template>
