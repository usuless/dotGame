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
        <button @click="handleButton" :value="'ArrowUp'" class="kbd pb-2">
            ▲
        </button>
        <button @click="handleButton" :value="'ArrowLeft'" class="kbd pb-2">
            ◀︎
        </button>
        <button @click="handleButton" :value="'ArrowRight'" class="kbd pb-2">
            ▶︎
        </button>
        <button @click="handleButton" :value="'ArrowDown'" class="kbd pb-2">
            ▼
        </button>
      </div>
      <button @click="handleButton" :value="'Enter'" class="kbd lg:w-2/12 p-5 text-2xl mb-2">
        ENTER
    </button>
</template>