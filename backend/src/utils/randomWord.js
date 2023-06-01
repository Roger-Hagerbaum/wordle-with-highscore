
import fetch from 'node-fetch';
export async function getRandomWord(length, unique) {

    const res = await fetch(
        'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
    );
    const body = await res.json();
    const words = Object.keys(body).filter(
        (word) =>
            word.length === length
    );
    if (unique) {
        const uniqueWord = words.filter(
            (e) => [...new Set(e.split(''))].join('') === e );
        return uniqueWord[
            Math.floor(Math.random() * uniqueWord.length)
            ].toUpperCase();
    }
    const random = Math.floor(Math.random() * words.length);
    return words[random];
}