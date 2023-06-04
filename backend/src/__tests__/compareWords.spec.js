import {compareWords} from "../utils/compareWords.js";

test("Check that the letters result get the correct label ", () => {
    const guess = "hallå".toUpperCase();
    const correctWord = "cykla".toUpperCase();
    const resultArray = compareWords(guess, correctWord);
    let result = [
        {
            letter: "H",
            result: "incorrect",
        },
        {
            letter: "A",
            result: "misplaced",
        },
        {
            letter: "L",
            result: "incorrect",
        },
        {
            letter: "L",
            result: "correct",
        },
        {
            letter: "Å",
            result: "incorrect",
        },
    ];
    expect(resultArray).toEqual(result);
});

test("tests if correct word works", () => {
    const guess = "correct".toUpperCase();
    const correctWord = "correct".toUpperCase();
    const resultArray = compareWords(guess, correctWord);
    let result = [
        {
            letter: "C",
            result: "correct",
        },
        {
            letter: "O",
            result: "correct",
        },
        {
            letter: "R",
            result: "correct",
        },
        {
            letter: "R",
            result: "correct",
        },
        {
            letter: "E",
            result: "correct",
        },
        {
            letter: "C",
            result: "correct",
        },
        {
            letter: "T",
            result: "correct",
        },
    ];
    expect(resultArray).toEqual(result);
});

test("tests random letters", () => {
    const guess = "itetteiti".toUpperCase();
    const correctWord = "testiitet".toUpperCase();
    const resultArray = compareWords(guess, correctWord);
    let result = [
        {
            letter: "I",
            result: "misplaced",
        },
        {
            letter: "T",
            result: "misplaced",
        },
        {
            letter: "E",
            result: "misplaced",
        },
        {
            letter: "T",
            result: "correct",
        },
        {
            letter: "T",
            result: "misplaced",
        },
        {
            letter: "E",
            result: "misplaced",
        },
        {
            letter: "I",
            result: "misplaced",
        },
        {
            letter: "T",
            result: "misplaced",
        },
        {
            letter: "I",
            result: "incorrect",
        },
    ];
    expect(resultArray).toEqual(result);
});
    test("tests repeating letters", () => {
        const guess = "iiiidddsssa".toUpperCase();
        const correctWord = "dddsssiiiia".toUpperCase();
        const resultArray = compareWords(guess, correctWord);
        let result = [
            {
                letter: "I",
                result: "misplaced",
            },
            {
                letter: "I",
                result: "misplaced",
            },
            {
                letter: "I",
                result: "misplaced",
            },
            {
                letter: "I",
                result: "misplaced",
            },
            {
                letter: "D",
                result: "misplaced",
            },
            {
                letter: "D",
                result: "misplaced",
            },
            {
                letter: "D",
                result: "misplaced",
            },
            {
                letter: "S",
                result: "misplaced",
            },
            {
                letter: "S",
                result: "misplaced",
            },
            {
                letter: "S",
                result: "misplaced",
            },
            {
                letter: "A",
                result: "correct",
            },



        ];
        expect(resultArray).toEqual(result);
});
test("tests if all are incorrect", () => {
    const guess = "japan".toUpperCase();
    const correctWord = "åskig".toUpperCase();
    const resultArray = compareWords(guess, correctWord);
    let result = [
        {
            letter: "J",
            result: "incorrect",
        },
        {
            letter: "A",
            result: "incorrect",
        },
        {
            letter: "P",
            result: "incorrect",
        },
        {
            letter: "A",
            result: "incorrect",
        },
        {
            letter: "N",
            result: "incorrect",
        },

    ];
    expect(resultArray).toEqual(result);
});

    /*Har skapat fem test som testar och täcker dom scenarion som jag kan komma på.
         För att testa att algoritmen fungera i enlighet med spelets regler.
       */