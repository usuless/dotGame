<script setup lang="ts">
const {isGameActive} = defineProps<{
    isGameActive: boolean
}>()

</script>
<template>
    <div v-if="!isGameActive" class="justify-center">
        <p>Naciśnij <span class="text-red-500">Enter</span> żeby zacząć grać</p>
        <p class="mt-5">Naciśnij &#8592; &#8593;  &#8594; &#8595;, żeby grać</p>
      </div>
</template>