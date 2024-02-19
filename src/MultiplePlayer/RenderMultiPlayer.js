
import React, { useState } from "react";
import Allbox from "./Allbox";
import WinnerDisplay from "./WinnerDisplay";
import './RenderMultiPlayer.css'

function RenderMultiPlayer(props) {
  const [wonby, setWonby] = useState("");
  const getWinnerDetails = (wonby) => {
    setWonby(wonby);
  };
  

  return (
    <div className="container">
      <Allbox getWinnerDetails={getWinnerDetails} reset={props.reset}></Allbox>
      <WinnerDisplay wonby={wonby} reset={props.reset}></WinnerDisplay>

    </div>
  );
  
}
export default RenderMultiPlayer;
