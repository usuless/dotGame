<script setup lang="ts">

const emit = defineEmits<{
  key: [key: string]
}>()

const handleButton = (event) => {
    emit('key', event.target.value)
}

</script>
<template>
    <div class="flex w-full justify-center text-4xl gap-4 m-4">
        <button @click="handleButton" :value="'ArrowUp'" class="kbd">
            ▲
        </button>
        <button @click="handleButton" :value="'ArrowLeft'" class="kbd">
            ◀︎
        </button>
        <button @click="handleButton" :value="'ArrowRight'" class="kbd">
            ▶︎
        </button>
        <button @click="handleButton" :value="'ArrowDown'" class="kbd">
            ▼
        </button>
      </div>
      <button @click="handleButton" :value="'Enter'" class="kbd w-6/12 mb-2">
        ENTER
    </button>
</template>