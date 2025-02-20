<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useSorted } from '@vueuse/core';

const {data , points} = defineProps<{
    data: Array<any>,
    points: number
}>()

let previousScores: Ref<Array<number>> = ref([])

let finallySorted: Array<number> = []

const isScoreOnBoard = () => {
        previousScores.value.push(points)
        //@ts-ignore
        let finalSort = useSorted(previousScores.value)
        finallySorted = sorting(finalSort.value)
}

const getIdArray = () => {

    data.forEach(player => {
        previousScores.value.push(player.score)
    })
}

const sorting = (array: Array<number>) => {
    let a1 = []
    array.forEach(element => {
    if (!a1.includes(element)) {
        a1.push(element);
    }
});
return a1
}

onMounted(() => {
    getIdArray()
    isScoreOnBoard()
})

</script>
<template>
    <div class="flex items-center justify-center">
        <div class="w-6/12">
            {{ finallySorted }}
            {{ data }}
        </div>
    </div>
</template>