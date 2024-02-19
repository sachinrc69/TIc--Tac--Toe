import Sallbox from "./Sallbox"
import SwinnerDisplay from "./SwinnerDisplay"
import './RenderSinglePlayer.css'

const RenderSinglePlayer=(props)=>{
    return(<div className="sboxbox">
<Sallbox getWinnerDetails={props.getWinnerDetails}  reset={props.reset}></Sallbox>
<SwinnerDisplay wonby={props.wonby}  reset={props.reset}></SwinnerDisplay>
</div>
    )
}

export default RenderSinglePlayer;