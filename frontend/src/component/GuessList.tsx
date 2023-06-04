import React from "react";
import {Guess} from "../types";
import GuessBoxes from "./GuessBoxes";

type GuessListProps = {
  guesses: Guess[];
};
const GuessList: React.FC<GuessListProps> = ({guesses}) => {
  return (
      <ul>
        {guesses.map((guess, index) => (
            <li key={index}>
              <GuessBoxes guess={guess} />
            </li>
        ))}
      </ul>
  );
}
export default GuessList;