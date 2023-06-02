import React from "react";
import {Game} from "../types";
import GuessInput from "../component/GuessInput";

type GameScreenProps = {
    game:Game;
    onGuess: (guess: string) => void;
};
const GameScreen: React.FC<GameScreenProps> = ({game, onGuess}) =>{
    return (
        <div className={"GameScreen"}>
            <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
            <ul>
                {game.guesses.map((guess) => (
                    <p>{(JSON.stringify(guess))}</p>
                ))}
            </ul>
        </div>

    );
};
export default GameScreen;