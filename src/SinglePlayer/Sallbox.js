import React, { useEffect, useState } from "react";
import Sbox from "./Sbox";
import "./Sallbox.css";
const Sallbox = (props) => {
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
    },
    {
      id: 1,
      played: null,
    },
    {
      id: 2,
      played: null,
    },
    {
      id: 3,
      played: null,
    },
    {
      id: 4,
      played: null,
    },
    {
      id: 5,
      played: null,
    },
    {
      id: 6,
      played: null,
    },
    {
      id: 7,
      played: null,
    },
    {
      id: 8,
      played: null,
    },
  ];

  const [newData, setNewData] = useState(boxes);

  const getData = (played, id) => {
    
    setCount(count + 1);
   
    let temp = newData[id];
    temp.played = played;
    let temp2 = newData;
    temp2[id] = temp;
    setNewData(temp2);
  };
 

  useEffect(() => {
    setCount(0);
    setWinnerClass("");
    SetWinner("");
    setPlaying(true);
    setplayer(true);
    setNewData(boxes);
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
          setPlaying(false);
          setplayer(true);
          SetWinner(newData[a].played);
          setWinnerClass("sline" + a.toString() + b + c);
          return true
        }
      }
    }
  };

  const rand = () => {
  
    if (playing === true && player===false) {
      let a = Math.floor(Math.random() * 9);
      if (newData[a].played === null ) return a;
      else {
        return rand();
      }
    }
    
  };

  if (playing === true && player === false) {
   
    if (count < 8) {
      if(!checkWinner()){
      let x = rand();
      setTimeout(() => {
        getData("O", x);
        getPlayerState(!player);
      }, 500);
    }
  }
  }


 

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
  },[player]);

 

  useEffect(() => {
    props.getWinnerDetails(winner);
  }, [winner]);

  return (
    <div className="smainkamain">
      <div
        className={winnerClass === "" ? "sline" : "sline " + winnerClass}
      ></div>

      <div className="smain-container">
        {newData.map((e) => (
          <Sbox
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
          ></Sbox>
        ))}
      </div>
    </div>
  );
};

export default Sallbox;
