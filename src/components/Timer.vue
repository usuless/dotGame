<script setup lang="ts">
import { setTimer } from '../utilities/timer';
import { computed, defineModel, watch} from 'vue';

let time = defineModel("time", {type: Number, required: true})
let isGameOn = defineModel("isGameOn", {type: Boolean})

//@ts-ignore
let timer = setTimer(time)

let minutes = computed(() => {
    if(timer.minutes.value.toString().length === 1) {
        return "0" + timer.minutes.value
    } else {
        return timer.minutes.value
    }
})

let seconds = computed(() => {
    if(timer.seconds.value.toString().length === 1) {
        return "0" + timer.seconds.value
    } else {
        return timer.seconds.value
    }
})

watch(isGameOn, () => {
    if(isGameOn) {
        timer = setTimer(time.value)
    }
})
</script>
<template>
    <p class="text-5xl mb-10">
        {{minutes}} : {{ seconds }}
    </p>
{{ timer }}

</template>