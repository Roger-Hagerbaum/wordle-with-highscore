import React from "react";
import {Game} from "../types";
import GuessInput from "../component/GuessInput";
import GuessBoxes from "../component/GuessBoxes";
import GuessList from "../component/GuessList";
import Timer from "../component/Timer";

type GameScreenProps = {
    game:Game;
    onGuess: (guess: string) => void;
};
const GameScreen: React.FC<GameScreenProps> = ({game, onGuess}) =>{
    return (
        <div className={"GameScreen"}>
            <Timer />
            <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
            <GuessList guesses={game.guesses} />

        </div>
    );
};
export default GameScreen;