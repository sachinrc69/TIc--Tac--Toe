import { useEffect, useState } from "react";
import "./SwinnerDisplay.css";

const SwinnerDisplay = (props) => {
  const [heading, setHeading] = useState("TIC-TAC-TOE SINGLE-PLAYER");

  useEffect(() => {
    if (props.wonby === "") setHeading("TIC-TAC-TOE SINGLE-PLAYER");
    else if(props.wonby==="tie") setHeading("Its a tie")
    else setHeading("Won by " + props.wonby);
  }, [props.wonby]);

  useEffect(() => {
    setHeading("TIC-TAC-TOE SINGLE-PLAYER");
  }, []);

  return <h1>{heading}</h1>;
};

export default SwinnerDisplay;
