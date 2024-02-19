import { useEffect, useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [game, setGame] = useState("1");

  useEffect(()=>{
    setGame("1")
  },[])

  return (
    <div className="playerInput">
      <select
        onChange={(e) => {
          props.getGame(game);
          setGame(e.target.value);
        }}
      >
        <option value="1">👤Single player</option>
        <option value="2">👤👤2 players</option>
      </select>
    </div>
  );
};

export default Input;
