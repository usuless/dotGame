<script setup lang="ts">
import { computed, defineModel, watch} from 'vue';

let time = defineModel("time", { type: Number, required: true})
let isGameOn = defineModel("isGameOn", {type: Boolean})

let seconds = computed(() => {
    if(time.value === undefined) {
        return "00"
    } else if(time.toString().length === 1) {
        return `0 + ${time.value}`
    } else {
        return time.value
    }
})

let test = () => {
    console.log(seconds.value)
    console.log(time.value.toString().length)
}

</script>
<template>
    {{ seconds }}
    <button @click="test">asdasdsa</button>
</template>