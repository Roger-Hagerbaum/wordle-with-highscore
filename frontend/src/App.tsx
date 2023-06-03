import React, {useState} from 'react';
import './App.css';
import {Game, GameState} from "./types";
import HomeScreen from "./screen/HomeScreen";
import GameScreen from "./screen/GameScreen";
import WonScreen from "./screen/WonScreen";

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.HOME);
    const [game, setGame] = useState<Game | null>(null);

    if (gameState === GameState.HOME) {
        return (
            <HomeScreen onStart={async (wordLength, unique) => {
                setGameState(GameState.GAME);
                const res = await fetch("http://localhost:5080/api/game", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        wordLength: wordLength,
                        unique: unique,
                    }),
                });
                const data = await res.json() as Game;
                setGame({
                    ...data,
                    guesses: [],
                });
            }}
            />
        );
    } else if (gameState === GameState.GAME) {
        if (game) {
            return (
               <GameScreen game={game}
                           onGuess={async (guess) => {
                               const res = await  fetch(
                                   `http://localhost:5080/api/game/guess`,
                                   {
                                       method: "POST",
                                       headers: {
                                           "Content-Type": "application/json",
                                       },
                                       body: JSON.stringify({
                                           id: game.id,
                                           guess,
                                       }),
                                   }
                               );
                               const data = await res.json();
                               if (data.correct) {
                                   setGameState(GameState.WON);
                               } else  {
                                   setGame({
                                       ...game,
                                       guesses: data.guesses,
                                   });
                               }
                           }}
               />
            )
        } else {
            return <h1>Loading game....</h1>;
        }
    }else if (gameState === GameState.WON){
        return <WonScreen />;
    }else  {
        return <></>;
    }
};
export default App;
