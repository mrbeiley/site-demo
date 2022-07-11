import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";
import Square from "./Square";

function Board() {
    return (
      <div className="Board">
          <Square></Square>
          <Square></Square>
          <Square></Square>

          <Square></Square>
          <Square></Square>
          <Square></Square>
          
          <Square></Square>
          <Square></Square>
          <Square></Square>
      </div>
    )
}

export default Board;