import { useEffect, useState } from "react";
import "./WinnerDisplay.css";

const WinnerDisplay = (props) => {
  const [heading, setHeading] = useState("TIC-TAC-TOE MULTI-PLAYER");

  useEffect(() => {
    if (props.wonby === "") setHeading("TIC-TAC-TOE MULTI-PLAYER");
    else if(props.wonby==="tie") setHeading("Its a tie")
    else setHeading("Won by " + props.wonby);
  }, [props.wonby]);
  useEffect(() => {
    setHeading("TIC-TAC-TOE MULTI-PLAYER");
  }, []);

  return <h1>{heading}</h1>;
};

export default WinnerDisplay;
