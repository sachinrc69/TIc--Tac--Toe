import { useState } from 'react'
import './Reset.css'



const Reset=(props)=>{
  const [reset,setReset]=useState(false)

const resetHandler=()=>{
setReset(!reset);
}

props.getReset(reset);



return<button className='reset-btn' onClick={resetHandler}>Reset</button>
}

export default Reset