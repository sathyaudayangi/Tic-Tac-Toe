import { useEffect, useState } from "react";
import { SquareValue } from "../../type";
import Board from "../Board/Board";
import Moves from "../Moves/Moves";

const Game: React.FC = () => {
    const [currentGame, setCurrentGame] = useState<SquareValue[]>(Array(9).fill(null))
    //[0 1 2 3 4 5 6 7 8]
    const [nextPlayer, setNextPlayer] = useState("X");
    const [history, sethistory] = useState<SquareValue[][]>([]);

    const SquareClick = (value: number) => {
        if (currentGame[value] != null) return;
        let currentGameTemp = currentGame.slice();
        if (nextPlayer == "X") {
            currentGameTemp[value] = "X";
            setNextPlayer("O");
        } else {
            currentGameTemp[value] = "O";
            setNextPlayer("X");
        }
        setCurrentGame(currentGameTemp);

    }

    const TimeTravelhandler = (value: number) => {
        if (!history) return;
        setCurrentGame(history[value]);
    }

    useEffect(() => {
        let historyTemp = history ? history?.slice() : [];
        historyTemp?.push(currentGame);
        sethistory(historyTemp);
    }, [currentGame])

    useEffect(() => {
        console.log(history);
    }, [history])

    return (
        <div>
            <Board SquareClick={value => SquareClick(value)} currentGame={currentGame}></Board>
            <Moves history={history} nextPlayer={nextPlayer} timeTravel={value => { TimeTravelhandler(value) }}></Moves>
        </div>
    )
}

export default Game;