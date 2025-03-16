<script setup lang="ts">
const emit = defineEmits(['mapChange'])
const { mapList } = defineProps<{ mapList: number[] }>()

let onMapChange = (mapId: number) => {
        emit('mapChange', mapId)
}
</script>

<template>
        <div class="flex items-center justify-center">
                <nav class="flex flex-col lg:flex-row justify-around w-10/12 lg:w-6/12 my-5">
                        <button class="text-xl hover:text-red-500 border-4 my-2 border-white hover:bg-white p-4" v-for="map in mapList" @click="onMapChange(map)">Map {{ map }}</button>
                </nav>
        </div>
</template>