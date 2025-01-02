<script setup lang="ts">
import { setTimer } from '../utilities/timer';
import { computed, watchEffect } from 'vue';

let timer = setTimer(600)
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

console.log(timer.seconds.value.toString())

watchEffect(async () => {
  if(timer.isExpired.value) {
    console.log("DZIAŁO")
  }
})
</script>
<template>
    <p class="text-5xl mb-10">
        {{minutes}} : {{ seconds }}
    </p>


</template>