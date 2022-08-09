import { SquareValue } from "../../type";

type SquareProps = {
    value : SquareValue
    clickSquareHandler: () => void
}

const Square: React.FC<SquareProps> = (props) => {
    return (
        <div className="square" onClick={ props.clickSquareHandler }>
            {props.value}
        </div>
    )
}

export default Square;