import React, {useState} from "react";
import {Game} from "../types";
import GuessList from "../component/GuessList";

type WonScreenProps = {
    game: Game;
    onSubmit: (name: string) => void;
};
const WonScreen: React.FC<WonScreenProps> = ({game, onSubmit }) => {
    const [name, setName] = useState("");
    return (
      <div className={"WonScreen"}>
          <h1>You guessed correct word!</h1>
          <input value={name} onChange={(ev) => setName(ev.target.value)}
                 type={"text"}
                 placeholder={"Your name"}/>
          <button onClick={() => onSubmit(name)}>Submit to high score</button>
          <GuessList guesses={game.guesses} />
      </div>
    );
};
export default WonScreen;