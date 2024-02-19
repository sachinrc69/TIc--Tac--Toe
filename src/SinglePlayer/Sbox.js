import "./Sbox.css";
import React, { useEffect, useState } from "react";

const Sbox = (props) => {
  const [display, setDisplay] = useState(null);
  let id = "sbox" + props.id;
  let clasname = props.heighlight ? "ssingleBox winnerBox " : "ssingleBox box ";

  const boxClickHandler = () => {
    if (props.playing === true && props.played === null) {
      if (props.player) props.getPlayerState(!props.player);
      props.getData("X", props.id);
    }
  };

  return (
    <div className={clasname} onClick={boxClickHandler} id={id}>
      {props.played}
    </div>
  );
};

export default Sbox;
