<script setup lang="ts">
const emit = defineEmits(['mapChange'])
const { mapList } = defineProps<{ mapList: number[] }>()

let onMapChange = (mapId: number) => {
        emit('mapChange', mapId)
}
</script>

<template>
        <nav>
                <button v-for="map in mapList" @click="onMapChange(map)">Map {{ map }}</button>
        </nav>
</template>