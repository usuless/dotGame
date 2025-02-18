<script setup lang="ts">
const {score} = defineProps<{
    score: number
}>()
</script>
<template>
    <p class="text-5xl mt-5">
        {{ score }}
      </p>
</template>