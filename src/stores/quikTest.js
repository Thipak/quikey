import { defineStore } from 'pinia'

const useTestStore = defineStore('test', {

  // Actual sentence - the actual sentence
  state: () => ({
    actual: '',
    typed: '',
    typing: false,
  }),
  getters: {},
  actions:  {
    newLetter(letter) {
      // Check if the letter is enter
      if(/^[a-zA-Z]$/.test(letter)){
        this.typed += letter;
        console.log('typed: ', this.typed);
      } else if(letter === ' ') {
        this.typed += ' ';
        console.log('typed: ', this.typed);
      }
    },
    deleteLetter() {
      // Check if the letter is enter
      this.typed = this.typed.slice(0, -1);
      console.log('typed: ', this.typed);
    },
    checkSentence() {
      // Check if the sentence is completed
      if (this.typed === this.actual) {
        console.log('Sentence completed');
        return true;
      }
      return false;
    },
    reset() {
      this.typed = '';
    }
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
