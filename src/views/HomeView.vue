<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import WordsComponent from '../components/WordsComponent.vue'

onMounted(() => {
  console.log('Component mounted'); // like componentDidMount
  window.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === ' ') {
      console.log('Space key pressed');
    }
    if (event.key === 'Backspace') {
      console.log('Backspace key pressed');
    }
  });
});

onBeforeUnmount(() => {
  console.log('Component is about to unmount');
});
</script>

<template>
<!--  Text Area containing String that will be typed -->
<!--  Keyboard image -->
<!--  Retry or new text button -->
  <p>Hi This is home page</p>
  <WordsComponent />
</template>

<style scoped>

</style>
