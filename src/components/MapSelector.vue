<script setup lang="ts">
const emit = defineEmits(['mapChange'])
const { mapList } = defineProps<{ mapList: number[] }>()

let onMapChange = (mapId: number) => {
        emit('mapChange', mapId)
}
</script>

<template>
        <div class="flex items-center justify-center">
                <nav class="flex justify-around w-4/12 my-5">
                        <button class="text-2xl hover:text-red-500 border-4 border-white hover:bg-white p-4" v-for="map in mapList" @click="onMapChange(map)">Map {{ map }}</button>
                </nav>
        </div>
</template>