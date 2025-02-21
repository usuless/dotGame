<script setup lang="ts">
import { onMounted, ref } from 'vue';
import GameRenderer from './GameRenderer.vue';
import MapSelector from './MapSelector.vue';
import type { Ref } from 'vue';
import UIFx from 'uifx';
import { handleKey } from '../utilities/keyHandler';
import { findTarget } from '../utilities/findTarget';
import { placePoint } from '../utilities/placePoint';
import sound from "../assets/sfx/sound.mp3"
import Timer from "./Timer.vue"
import { loadMap } from '../utilities/gameMap';
import Captions from './Captions.vue';
import Score from './Score.vue';
import { getData } from '../server/getData';

const mapList = [1, 2, 3]
const defaultMap = loadMap(1);

let currentMap = ref<string[]>(defaultMap)
let isGameFinished = ref(false)

const onGameRefresh = (mapId: number) => {
  currentMap.value = loadMap(mapId);
  playerLocation = findTarget(mapGame.value, "X")
  points.value = 0
  mapGame.value = placePoint(mapGame.value)
  pointLocation = findTarget(mapGame.value, "*")
  isGameOn.value = false
  isGameFinished.value = false
}

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

let isGameOn: Ref<boolean> = ref(false)

let moves: string[] = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]

// poruszanie się

document.addEventListener('keydown', function (e) {
  
  if (e.key === "Enter" && isGameFinished.value === false) {
    points.value = 0
    isGameOn.value = true
  }

  if (moves.includes(e.key) && isGameOn.value === true) {
    // rozpoczęcie gry
    mapGame.value = handleKey(e.key, mapGame.value, playerLocation)

    playerLocation = findTarget(mapGame.value, "X")
    // gracz znalazł punkt
    if (pointLocation[0] === playerLocation[0] && pointLocation[1] === playerLocation[1]) {
      points.value++
      pointSound.play()
      mapGame.value = placePoint(mapGame.value)
      pointLocation = findTarget(mapGame.value, "*")
    }
  }
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
    <Timer :is-game-on="isGameOn" :points="points" @end-of-the-game="onGameEnd()" />
    <GameRenderer :game-map="currentMap" :is-game-active="isGameOn" :is-game-finished="isGameFinished" :score="points" :db="db" />
    <Score :score="points" />
    <Captions @newGame="onGameRefresh" :is-game-active="isGameOn" :is-game-finished="isGameFinished" />
  </div>
</template>
