<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

const {data , points} = defineProps<{
    data: Array<any>,
    points: number
}>()

let finallySorted: Array<any> = []

const isScoreOnBoard = () => {
    finallySorted = sorting(data)
}

const sorting = (array: Array<any>) => {
    let values = array
    values.sort(function(a, b) { 
  return b.score - a.score  ||  a.playerName.localeCompare(b.playerName);
});
    return values
}

onMounted(() => {
    isScoreOnBoard()
})

</script>
<template>
        <div class="grid grid-cols-5 mt-5  place-items-center gap-8">
            <div class="w-6/12" v-for="player in data">
                <p class="text-red-500">{{player.playerName}}</p>
                <p>{{player.score}}</p>
            </div>
        </div>
</template>