import "./Box.css";
import React, { useEffect, useState } from "react";

const Box = (props) => {
  console.log("box");

  let id = "box" + props.id;
  let clasname = props.heighlight ? "singleBox winnerBox " : "singleBox box ";

  const boxClickHandler = () => {
    if (props.playing === true && props.played === null) {
      if (props.player) {
        props.getPlayerState(!props.player);
        props.getData("X", props.id);
      } else {
        props.getPlayerState(!props.player);
        props.getData("O", props.id);
      }
    }
  };

  return (
    <div className={clasname} onClick={boxClickHandler} id={id}>
      {props.played}
    </div>
  );
};

export default Box;
