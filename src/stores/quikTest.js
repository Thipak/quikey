import { defineStore } from 'pinia'

const useTestStore = defineStore('test', {

  // Actual sentence - the actual sentence
  state: () => ({
    actual: '',
    typed: '',
  }),
  getters: {},
  actions:  {
    newLetter(letter) {
      this.typed += letter;
      console.log('typed', this.typed);
      
    },
  },
});

export default useTestStore
  // Current Word - for comparison purpose
  // word set - the sentence to be typed
  // current word index - to highlight it
  // current letter - for validation purpose
  // current letter index - to highlight it

  // isLetterCorrect - validation result
  // isWordCorrect - validation result

  // isWordCompleted - to check if the word is completed
  // isSentenceCompleted - to check if the sentence is completed
  // isTyping - to check if the user is typing
  
  // correctWordCount - to count the number of correct words
  // correctLetterCount - to count the number of correct letters

  // return { actual, typed, newLetter }
