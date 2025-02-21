<script setup>
import Game from './components/Game.vue';
import Header from './components/Header.vue';

window.addEventListener("keydown", function(e) { 
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1)
     { e.preventDefault(); } }, false); 

</script>
<template>
    <Header/>
    <Game/>
</template>