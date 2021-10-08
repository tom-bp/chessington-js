//Queen
import Square from "./../square";
import Player from "../player";
import Piece from "./piece";

export default class Queen extends Piece {
  constructor(player) {
    super(player);
  }
  getAvailableMoves(board) {
    const currentSquare = board.findPiece(this);
    const queenDirection = [];

    for (let i = -7; i < 8; i++) {
      if (
        currentSquare.row + i < 8 &&
        currentSquare.col + i < 8 &&
        currentSquare.row + i >= 0 &&
        currentSquare.col + i >= 0 &&
        i !== 0
      ) {
        queenDirection.push(
          Square.at(currentSquare.row + i, currentSquare.col + i)
        );
      }
    }
    for (let i = -7; i < 8; i++) {
      if (
        currentSquare.row - i < 8 &&
        currentSquare.col + i < 8 &&
        currentSquare.row - i >= 0 &&
        currentSquare.col + i >= 0 &&
        i !== 0
      ) {
        queenDirection.push(
          Square.at(currentSquare.row - i, currentSquare.col + i)
        );
      }
    }
    for (let i = -7; i < 8; i++) {
      if (currentSquare.row + i < 8 && currentSquare.row + i >= 0 && i !== 0) {
        queenDirection.push(
          Square.at(currentSquare.row + i, currentSquare.col)
        );
      }
    }
    for (let i = -7; i < 8; i++) {
      if (currentSquare.col + i < 8 && currentSquare.col + i >= 0 && i !== 0) {
        queenDirection.push(
          Square.at(currentSquare.row, currentSquare.col + i)
        );
      }
    }
    return queenDirection;
  }
}
