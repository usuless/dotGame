<script setup lang="ts">
const {score} = defineProps<{
    score: number,
    isGameFinished: boolean
}>()

</script>
<template>
    <p v-if="!isGameFinished" class="text-5xl mt-5">
        {{ score }}
      </p>
</template>