//horsey
import Square from "./../square";
import Player from "../player";
import Piece from "./piece";

export default class Knight extends Piece {
  constructor(player) {
    super(player);
  }
  getAvailableMoves(board) {
    const currentSquare = board.findPiece(this);
    const knightDirection = [];

    knightDirection.push(Square.at(currentSquare.row + 2, currentSquare.col + 1));
    knightDirection.push(Square.at(currentSquare.row + 1, currentSquare.col + 2));
    knightDirection.push(Square.at(currentSquare.row - 2, currentSquare.col - 1));
    knightDirection.push(Square.at(currentSquare.row - 1, currentSquare.col - 2));

    knightDirection.push(Square.at(currentSquare.row + 2, currentSquare.col - 1));
    knightDirection.push(Square.at(currentSquare.row + 1, currentSquare.col - 2));
    knightDirection.push(Square.at(currentSquare.row - 2, currentSquare.col + 1));
    knightDirection.push(Square.at(currentSquare.row - 1, currentSquare.col + 2));

    return knightDirection;
  }
}
