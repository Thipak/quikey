<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import WordsComponent from '@/components/WordsComponent.vue'
import useTestStore from '@/stores/quikTest.js'
import fetchWords from '@/services/WordBuilderService.js'

const testStore = useTestStore();

onMounted(async () => {
    

    console.log('Component mounted'); // like componentDidMount
    // Fetch data from the API
    let words = await fetchWords();
    testStore.setWords(words);
    console.log(testStore.actual);
    window.addEventListener('keydown', (event) => {

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
    <WordsComponent v-if="testStore.actualList.length" :words="testStore.actualList" />
    <button @click="testStore.reset">Reset</button>
</template>

<style scoped>

</style>
