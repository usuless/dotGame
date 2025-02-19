<script setup lang="ts">
const {data , points} = defineProps<{
    data: Object,
    points: number
}>()
</script>
<template>
    {{ data }}
    {{ points }}
</template>