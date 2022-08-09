import { SquareValue } from "../../type";
import NextPlayer from "./NextPlayer";

type movesProps = {
    history: SquareValue[][] | null,
    nextPlayer: String
    timeTravel: (value:number) => void
}

const Moves: React.FC<movesProps> = (props) => {
    return (
        <div>
            <NextPlayer nextPlayer={props.nextPlayer}></NextPlayer>
            <ol>
                <li>Go to game start</li>
                {props.history?.map((item, index) => {
                    if(index==0){
                        return
                    }
                    return <li key={index} onClick={ ()=> {props.timeTravel(index)}}>Go to move #{index + 1}</li>
                })
                }
            </ol>
        </div>
    )
}

export default Moves;