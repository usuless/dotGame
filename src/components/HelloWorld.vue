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

let playerLocation: number[]

let findPlayer = () => {
  for(let i=0; i < parsedGame.length; i++) {
    for(let idx=0;i < parsedGame[i].length; i++) {
      if(parsedGame[i][idx] === "X") {
        playerLocation = [i, idx]
        return
      }
    }
  }
}

let moveRight = () => {
  
}

let testFn = () => {
  console.log(parsedGame)
}

document.addEventListener('keydown', function(e) {
    if(e.key === "w") {
    console.log("mamy cie") 
    }
    
    if(e.key === "a") {
    console.log("mamy cie") 
    }
    
    if(e.key === "s") {
    console.log("mamy cie") 
    }
    
    if(e.key === "d") {
    console.log("mamy cie") 
    }
    
    
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
  <button @click="testFn">click</button>

</template>

<style scoped>
</style>