import React from "react";
import {Guess} from "../types";
import "../style/Style.css";
type GuessBoxesProps = {
    guess: Guess;
};
const GuessBoxes: React.FC<GuessBoxesProps> = ({guess}) => {
    return (

    <ul className={"GuessBox"}>
        {guess.map((letter,index) => (
           <li key={index} className={letter.result}>{letter.letter} </li>
        ))}
    </ul>
    );
};
export default GuessBoxes;