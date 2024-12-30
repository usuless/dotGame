<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { moveRight } from '../utilities/moveSet';


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

let parsedGame: Ref<string[]> = ref(game.value.split("\n"))

let playerLocation: number[]

let findPlayer = () => {
  for(let i=0; i < parsedGame.value.length; i++) {
    for(let idx = 0; idx < parsedGame.value[i].length; idx++) {
      if(parsedGame.value[i][idx] === "X") {
        playerLocation = [i, idx]
        return
      }
    }
  }
}



document.addEventListener('keydown', function(e) {
    if(e.key === "w") {
    console.log("mamy cie") 
    }
    
    if(e.key === "a") {
      console.log("działa")
    }
    
    if(e.key === "s") {
      console.log("mamy cie") 
    }
    
    if(e.key === "ArrowRight") {
      parsedGame.value = moveRight(parsedGame.value, playerLocation)
      findPlayer()
    }
    
    console.log(e.key) 
    
})

findPlayer()
</script>

<template>
  <div class="flex items-center justify-center mt-20">
    <pre>
      {{ game }}
    </pre>
  </div>
  <div class="flex items-center justify-between w-3/12" v-for="line in parsedGame">
    <div class="" v-for="letter in line">
      {{ letter }}
    </div>
  </div>
  {{ playerLocation }}
</template>

<style scoped>
</style>