import React from "react";
import {Guess} from "../types";
import GuessBoxes from "./GuessBoxes";
import "../style/Style.css";

type GuessListProps = {
  guesses: Guess[];
};
const GuessList: React.FC<GuessListProps> = ({guesses}) => {
  return (
      <ul className={"GuessList"}>
        {guesses.map((guess, index) => (
            <li key={index}>
              <GuessBoxes guess={guess} />
            </li>
        ))}
      </ul>
  );
}
export default GuessList;