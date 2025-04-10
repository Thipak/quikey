<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import WordsComponent from '@/components/WordsComponent.vue'
import useTestStore from '@/stores/quikTest.js'

const testStore = useTestStore();

onMounted(() => {
    

    console.log('Component mounted'); // like componentDidMount
    // Initialize the store or perform any setup logic here
    testStore.actual = "i can type now";
    console.log(testStore.actual);
    window.addEventListener('keydown', (event) => {
    
        console.log(event.key);
        if (event.key === 'Enter') {
        console.log('Enter key pressed');
        if(testStore.checkSentence()) {
            console.log('Correct sentence');
            testStore.reset();
        } else {
            console.log('Incorrect sentence');
        }
        }
        else if (event.key === 'Backspace') {
        console.log('Backspace key pressed');
            testStore.deleteLetter();
        } else {
            testStore.newLetter(event.key);
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
  <WordsComponent  />
  <button @click="testStore.reset">Reset</button>
</template>

<style scoped>

</style>
