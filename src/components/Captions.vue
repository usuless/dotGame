<script setup lang="ts">
const {isGameActive, isGameFinished} = defineProps<{
    isGameActive: boolean,
    isGameFinished: boolean
}>()

</script>
<template>
    {{ isGameFinished }}
    <div v-if="!isGameActive && !isGameFinished" class="justify-center mt text-center">
        <p>Naciśnij <span class="text-red-500">Enter</span> żeby zacząć grać</p>
        <p class="mt-5">Naciśnij &#8592; &#8593;  &#8594; &#8595;, żeby grać</p>
    </div>
    <button v-if="isGameFinished" @click="$emit(`newGame`)" class="border-4 border-white hover:bg-white hover:text-red-500 mt-5 p-4">Zagraj ponownie</button>
</template>