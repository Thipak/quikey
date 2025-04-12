import { defineStore } from 'pinia'

const useTestStore = defineStore('test', {

  // Actual sentence - the actual sentence
  state: () => ({
    actual: '',
    actualList: [],
    typed: '',
    typing: false,
    wordCount: 0,
    currentWordIndex: 0,
  }),
  getters: {},
  actions:  {
    setWords(words) {
      console.log('words: ', words);
      this.actualList = words;
      // Set the actual sentence
      this.actual = words.join(' ');
      // Set the word count
      this.wordCount = words.length;
    },
    newLetter(letter) {
      // Check if the letter is enter
      if(/^[a-zA-Z]$/.test(letter)){
        this.typed += letter;
      } else if(letter === ' ') {
        this.typed += ' ';
        this.currentWordIndex++;

        console.log('typed: ', this.typed);
      }
    },
    deleteLetter() {
      // Check if the letter is enter
      if(this.typed.length === 0) {
        return;
      }
      // Check if the letter is space
      if(this.typed[this.typed.length - 1] === ' ') {
        this.currentWordIndex--;
      }
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
