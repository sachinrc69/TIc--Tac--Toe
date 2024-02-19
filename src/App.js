import "./App.css";
import React, { useState } from "react";
import Input from "./Input";
import RenderSinglePlayer from "./SinglePlayer/RenderSinglePlayer";
import RenderMultiPlayer from "./MultiplePlayer/RenderMultiPlayer";
import Reset from "./Reset/Reset";
function App() {

  const [wonby, setWonby] = useState("");
  const [gameType, setGameType] = useState();
  const [reset,setReset]=useState();
  const getWinnerDetails = (wonby) => {
    setWonby(wonby);
  };

  const getGame = (x) => {
    setGameType(x);
  };

  const getReset=(y)=>{
    setReset(y);
  }




 

  if (gameType === "1") {
    return (
      <div className="appContainer">
        <RenderMultiPlayer reset={reset}></RenderMultiPlayer>
        <Reset getReset={getReset}></Reset>
        <Input getGame={getGame}></Input>
      </div>
    );
  } else
    return (
      <div className="appContainer"> 
        <RenderSinglePlayer
        reset={reset}
          getWinnerDetails={getWinnerDetails}
          wonby={wonby}
        ></RenderSinglePlayer>
                <Reset getReset={getReset}></Reset>

        <Input getGame={getGame}></Input>
      </div>
    );
}
export default App;
