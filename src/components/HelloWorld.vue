<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

let game: Ref<string> =ref(
`
---------------------
|.X..................
|..|.................
|..|.......----------
|..|.......|.........
|..----....|.........
|....................
`)

let parsedGame: string[] = game.value.split("\n")

let playerLocation: number

let findPlayer = () => {
  for(let i = 0; i < game.value.length; i++) {
    if(game.value[i] === "X") {
      playerLocation = i
      return
    }
  }
}

let moveRight = () => {
}

let testFn = () => {
  console.log(parsedGame)
}


findPlayer()
</script>

<template>
  <div class="flex items-center justify-center mt-20">
    <pre>
      {{ game }}
    </pre>
  </div>
  <div class="flex content-between items-center justify-center bg-teal-600" v-for="line in parsedGame">
    {{ line }}
  </div>
  <button @click="testFn">click</button>
</template>

<style scoped>
</style>