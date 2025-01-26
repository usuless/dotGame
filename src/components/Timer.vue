<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import type { Ref } from 'vue';
import { useTimer, type UseTimer } from 'vue-timer-hook';

let points = defineModel("points", {type: Number})
let isGameOn = defineModel("isGameOn",{type: Boolean})

let time = new Date()
let pointGain: Ref<boolean> = ref(false)

const startTime = () => {
  time = new Date()
  time.setSeconds(time.getSeconds() + 5);
  //@ts-ignore
  timer = useTimer(time)
}

let timer: UseTimer;

const addSecond = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1 + timer.seconds.value);
//@ts-ignore
  timer.restart(time)
}


const seconds = computed(() => {
  if (isGameOn.value === false) {
    return "20"
  }
  if(timer.seconds.value.toString().length === 1) {
    return "0" + timer.seconds.value.toString()
  } else {
    return timer.seconds.value.toString()
  }
})

const pointGained = () => {
  pointGain.value = true
  setTimeout(() => {pointGain.value = false}, 600)
}

watch(points, () => {
  addSecond()
  pointGained()
})

watch(isGameOn, () => {
  if(isGameOn.value === true) {
    startTime()
  }
})

</script>
<template>
  <div class="mb-10 text-5xl flex bg-background">
    <p v-show="!pointGain" class="justify-self-center">
      {{seconds}} {{ isGameOn }}
    </p>
        <p v-show="pointGain" class="text-yellow-400">  +1 Sec</p>
  </div>
</template>