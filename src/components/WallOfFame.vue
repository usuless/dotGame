<script setup lang="ts">
import { onMounted, ref} from 'vue';
import { getData } from '../server/getData';
import { InsertData } from '../server/insertData';

const {data , points} = defineProps<{
    data: any,
    points: number
}>()

let topScores = ref(data)

let submitScore = ref(false)
let playerName = ref('')

let scoreCheck = () => {
    if(data.length < 10 || data[9].score < points) {
        submitScore.value = true
    }
}

let submitName = () => {
    InsertData(playerName.value, points)
    topScores.value = getData(topScores)
    submitScore.value = false
}

onMounted(() => {
    scoreCheck()
})
</script>
<template>
        <div v-if="!submitScore" class="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  place-items-center gap-8">
            <div class="w-6/12" v-for="player in topScores">
                <p class="text-red-500">{{player.playerName}}</p>
                <p>{{player.score}}</p>
            </div>
        </div>
        <div v-else class="flex flex-col items-center my-10 text-center">
            <input v-model="playerName" type="text" class="w-6/12 h-12 mb-5 border-gray-700 border-2 bg-slate-800">
            <label >Wprowadź imię (nie więcej niż 12 znaków)</label>
            <button class="border-4 border-white hover:bg-white hover:text-red-500 m-4 p-4" @click="submitName">Wyślij</button>
        </div>
</template>