import React from "react";
import {Game} from "../types";
import GuessInput from "../component/GuessInput";
import GuessBoxes from "../component/GuessBoxes";

type GameScreenProps = {
    game:Game;
    onGuess: (guess: string) => void;
};
const GameScreen: React.FC<GameScreenProps> = ({game, onGuess}) =>{
    return (
        <div className={"GameScreen"}>
            <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
            <ul>
                {game.guesses.map((guess, index) => (
                    <li key={index}>
                        <GuessBoxes guess={guess} />
                    </li>

                ))}
            </ul>
        </div>
    );
};
export default GameScreen;