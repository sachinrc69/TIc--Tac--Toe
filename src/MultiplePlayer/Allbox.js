import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./Allbox.css";
const Allbox = (props) => {




  const [player, setplayer] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [winner, SetWinner] = useState("");
  const [winnerClass, setWinnerClass] = useState("");
  const [count,setCount]=useState(0);

  const getPlayerState = (player) => {
    setplayer(player);
  };

  const boxes = [
    {
      id: 0,
      played: null,
      heighlight: false,
    },
    {
      id: 1,
      played: null,
      heighlight: false,
    },
    {
      id: 2,
      played: null,
      heighlight: false,
    },
    {
      id: 3,
      played: null,
      heighlight: false,
    },
    {
      id: 4,
      played: null,
      heighlight: false,
    },
    {
      id: 5,
      played: null,
      heighlight: false,
    },
    {
      id: 6,
      played: null,
      heighlight: false,
    },
    {
      id: 7,
      played: null,
      heighlight: false,
    },
    {
      id: 8,
      played: null,
      heighlight: false,
    },
  ];

  const [newData, setNewData] = useState(boxes);

  const getData = (played, id) => {
    setCount(count+1);
    boxes[id].played = played;
    let temp = newData;
    temp[id].played = played;
    setNewData(temp);
  };

  useEffect(() => {
    setNewData(boxes);  
    setCount(0);
    setWinnerClass("");
    SetWinner("")
    setPlaying(true);
    setplayer(true);
  }, [props.reset]);

  const checkWinner = () => {
    const winnerConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const f of winnerConditions) {
      const [a, b, c] = f;

      if (newData[a].played !== null) {
        if (
          newData[a].played === newData[b].played &&
          newData[b].played === newData[c].played
        ) {
          newData[a].heighlight = true;
          newData[b].heighlight = true;
          newData[c].heighlight = true;
          setPlaying(false);
          SetWinner(newData[a].played);
          setWinnerClass("line" + a.toString() + b + c);
        }
      }
    }
  };

  const checkTie=()=>{
    if(count===9 && winner==="")
   {
    setPlaying(false);
    setplayer(true);
    SetWinner("tie")}
  }

  useEffect(() => {
    checkWinner();
    checkTie();
  }, [player]);

  useEffect(() => {
    props.getWinnerDetails(winner);
  }, [winner]);
  

  return (
    <div className="mainkamain">
      <div
        className={winnerClass === "" ? "line" : "line " + winnerClass}
      ></div>

      <div className="main-container">
        {newData.map((e) => (
          <Box
          checkTie={checkTie}
            reset={props.reset}
            key={e.id}
            id={e.id}
            played={e.played}
            player={player}
            getPlayerState={getPlayerState}
            checkWinner={checkWinner}
            playing={playing}
            getData={getData}
            winner={winner}
            heighlight={e.heighlight}
          ></Box>
        ))}
      </div>
    </div>
  );
};

export default Allbox;
