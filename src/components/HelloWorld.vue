<script setup lang="ts">

let game: string = `---------------------
|.X..................
|..|.................
|..|.......----------
|..|.......|.........
|..----....|.........
|....................
`
const parsedGame: string[] = game.split("\n")
const lineLength = parsedGame[0].length

const gridLength = `grid-cols-${lineLength}`

</script>

<template>
  <p class="bg-red-500">test</p>
  <div  v-for="line in parsedGame">
    <div v-for="letter in line" class="grid-cols-5">
      <p class="color-red">
        {{ letter }}
      </p>
    </div>
  </div>
{{ gridLength }}
</template>

<style scoped>
</style>