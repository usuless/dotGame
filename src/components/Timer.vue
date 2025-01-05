<template>
  <div>
      <div>
        <p class="text-5xl">
          {{seconds}}
        </p>
      </div>
  </div>
  <button @click="addThreeSeconds">Test</button>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useTimer } from 'vue-timer-hook';

const time = new Date();
time.setSeconds(time.getSeconds() + 20);
const timer = useTimer(time);

const addThreeSeconds = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3 + timer.seconds.value);
  timer.restart(time)
}


let seconds = computed(() => {
  if(timer.seconds.value.toString().length === 1) {
    return "0" + timer.seconds.value.toString()
  } else {
    return timer.seconds.value.toString()
  }
})

</script>