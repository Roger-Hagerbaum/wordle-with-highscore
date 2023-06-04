import React, {useState} from "react";
import "../style/Style.css";
type GuessInputProps = {
    wordLength: number;
    onGuess: (guess: string) => void;
};

const GuessInput: React.FC<GuessInputProps> = ({onGuess, wordLength}) => {
    const [text , setText] = useState("");

    return (
        <div>
            <ul className={"GuessInput"}>
                {Array.from(new  Array(wordLength)).map((_, index) => (
                    <li key={index}></li>
                ))}
            </ul>
            <input
                value={text} onChange={(ev) => setText(ev.target.value)}
                type={"text"} placeholder={"Enter quess"}/>
            <button onClick={() => onGuess(text)}>Guess</button>
        </div>
    );
};
export default GuessInput;