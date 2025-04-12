<script setup>
defineProps({
    words: Array
});
</script>

<template>
    
    <span v-for="word in words">{{ word + " - " }}</span>
</template>

<style scoped>
</style>