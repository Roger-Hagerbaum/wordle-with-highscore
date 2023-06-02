import React, {useState} from 'react';
import './App.css';
import {GameState} from "./types";
import HomeScreen from "./screen/HomeScreen";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.HOME);

  if (gameState === GameState.HOME){
    return <HomeScreen />
  }
  else  {
    return <></>;
  }
}
export default App;
