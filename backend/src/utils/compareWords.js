
export function compareWords(guess, correctWord) {
    let resultArray = [];
    let gues =guess.toUpperCase();
    let corr =correctWord.toUpperCase();
    for (let i = 0; i < corr.length; i++) {
        if (gues[i] === corr[i]) {
            resultArray[i] = {letter: gues[i], result: "correct"};
        }else {
            resultArray[i] = {letter: gues[i], result: ""};
        }
    }
        for (let i = 0; i < corr.length; i++) {
            let letter = corr.split(gues[i]).length -1;
           if(corr.includes(gues[i])) {
               for(let j = 0; j < corr.length; j++ ) {
                   if(resultArray[j].result === "correct" && resultArray[j].letter === gues[i]) {
                       letter --;
                   }else if(resultArray[j].result === "misplaced" && resultArray[j].letter === gues[i]){
                       letter --;
                   }
               }
           }
           if (corr.includes(gues[i]) && resultArray[i].result !== "correct" && letter > 0)  {
                resultArray[i] = {letter: gues[i], result: "misplaced"};
            } else if (!corr.includes(gues[i])|| resultArray[i].result === "") {
                resultArray[i] = {letter: gues[i], result: "incorrect"};
            }
        }

    console.log(resultArray)
    return resultArray;
}