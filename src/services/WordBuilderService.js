import axios from "axios";

async function fetchWords() {
    try {
        const response = await axios.get('https://random-word-api.herokuapp.com/word?number=5');
        return response.data;
    } catch (error) {
        console.error('Error fetching words:', error);
        throw error;
    }
}

export default fetchWords;