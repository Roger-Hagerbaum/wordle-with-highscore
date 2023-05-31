import fetch from 'node-fetch';
export async function randomWord(length, unique) {

    const res = (
        {
            "Hello": 5,
            "CYCLE": 5,
            "FALSE": 5,
            "TRUTH": 5,
            "COOL": 4,
            "FULL": 4,
            "HIGH": 4,
            "EMPTY": 4,
            "TALL": 4,
        }
    );

    const body = await res.json();
    const words = Object.keys(body).filter(
        (word) =>
            word.length === length
    );
    const random = Math.floor(Math.random() * words.length);
    if (unique) {
        const uniqueC = words.filter(
            (e) => [...new Set(e.split(''))].join('') === e );
        return uniqueC[
            Math.floor(Math.random() * uniqueC.length)
            ].toUpperCase();
    }
    return await words[random];
}