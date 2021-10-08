import Piece from "./piece";
import Square from "./../square";
import Player from "./../player";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
    // this.FirstMove = true;
  }

  getAvailableMoves(board) {
    const currentSqaure = board.findPiece(this);
    if (this.player === Player.WHITE) {
      return [Square.at(currentSqaure.row + 1, currentSqaure.col)];
    }
    if (this.player === Player.BLACK) {
      return [Square.at(currentSqaure.row - 1, currentSqaure.col)];
    }
  }
}

//   getAvailableMoves(board) {
//     const location = board.findPiece(this);
//     const yDirection = this.player == Player.WHITE ? 1 : -1;
//     const availableMoves = [];
//     if (
//       board.getPiece(new Square(location.row + yDirection, location.col)) ===
//       undefined
//     ) {
//       console.log(this.isFirstMove);
//       if (
//         this.isFirstMove &&
//         board.getPiece(
//           new Square(location.row + 2 * yDirection, location.column)
//         ) === undefined
//       ) {
//         availableMoves.push(
//           new Square(location.row + 2 * yDirection, location.col)
//         );
//       }
//       this.isFirstMove = false;
//       availableMoves.push(new Square(location.row + yDirection, location.col));
//     }
//     return availableMoves;
//   }
// }
