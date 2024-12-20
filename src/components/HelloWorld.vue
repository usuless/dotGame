<script setup lang="ts">

let game: string = `---------------------
|.X..................
|..|.................
|..|.......----------
|..|.......|.........
|..----....|.........
|....................
`
let parsedGame: string[] = game.split("\n")

console.log(parsedGame)

</script>

<template>
  <div v-for="line in parsedGame" class="">
    <p>{{line}}</p>
  </div>

</template>

<style scoped>
</style>
