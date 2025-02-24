<script setup lang="ts">

const emit = defineEmits<{
  key: (s: string) => void
}>()

const handleButton = (key: string) => {
    //@ts-ignore
    emit('key', key)
}

</script>
<template>
    <div class="flex w-full justify-center gap-4 m-4">
        <button @click="handleButton('ArrowUp')" class="kbd">
            <p class="text-4xl m-4">▲</p>
        </button>
        <button @click="handleButton('ArrowLeft')" class="kbd">
            <p class="text-4xl m-4">◀︎</p></button>
        <button @click="handleButton('ArrowRight')" class="kbd">
            <p class="text-4xl m-4">▶︎</p>
        </button>
        <button @click="handleButton('ArrowDown')" class="kbd">
            <p class="text-4xl m-4">▼</p>
        </button>
      </div>
</template>