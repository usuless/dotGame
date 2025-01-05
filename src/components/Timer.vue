<script setup lang="ts">
import { computed, watch } from 'vue';
import { useTimer, type UseTimer } from 'vue-timer-hook';

let points = defineModel("points", {type: Number})
let isGameOn = defineModel("isGameOn",{type: Boolean})

let time = new Date()

const startTime = () => {
  time = new Date()
  time.setSeconds(time.getSeconds() + 20);
  timer = useTimer(time)
}

//@ts-ignore
let timer: UseTimer;

const addSecond = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1 + timer.seconds.value);
//@ts-ignore
  timer.restart(time)
}


let seconds = computed(() => {
  if (isGameOn.value === false) {
    return "20"
  }
  if(timer.seconds.value.toString().length === 1) {
    return "0" + timer.seconds.value.toString()
  } else {
    return timer.seconds.value.toString()
  }
})

watch(points, () => {
  addSecond()
})

watch(isGameOn, () => {
  if(isGameOn.value === true) {
    startTime()
  }
})

</script>
<template>
  {{ isGameOn }}
  <div class="mb-10">
        <p class="text-5xl">
          {{seconds}}
        </p>
  </div>
</template>