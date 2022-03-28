import { Injectable } from '@angular/core';
import { ChessPawnBoard } from '../models/chess-board/chess-board';
import { Directions } from '../models/directions';
import { BLACK_KING } from '../models/pawns/black-pawns';
import { PawnInfo, PawnType } from '../models/pawns/pawn-type';
import { WHITE_KING } from '../models/pawns/white-pawns';

@Injectable({
  providedIn: 'root'
})
export class PawnSimulationService {
  selectedPawn:PawnInfo;
  constructor() { }
  /**
   * @description function will execute the command for place
   * @param dataForCommand 
   * @param board 
   * @returns 
   */
setPlaceCommand(dataForCommand,board){
  this.selectedPawn = new PawnInfo(dataForCommand.xValue,dataForCommand.yValue,Number(dataForCommand.direction),Number(dataForCommand.pawnType));

  if(this.isValidPosition() != false){
    return this.setupBoard(board)
  }
 
}

setupBoard(board){
  board = this.clearBoard(board);
  if(this.selectedPawn.team == PawnType.White){
    board[this.selectedPawn.xValue][this.selectedPawn.yValue]  = {...WHITE_KING}
  }else{
    board[this.selectedPawn.xValue][this.selectedPawn.yValue]  = {...BLACK_KING}
  }
  return board;
}
moveCommand(){
  if(this.moveCommandIsValid()){
    switch (this.selectedPawn.direction) {
      case Directions.North:
        if(this.isValidPosition() != false){
          this.selectedPawn.yValue++;
        }
          break;
      case Directions.East:
        if(this.isValidPosition() != false){
          this.selectedPawn.xValue++;
        }
          break;
      case Directions.South:
        if(this.isValidPosition() != false){
          this.selectedPawn.yValue--;
        }
          break;
      case Directions.West:
        if(this.isValidPosition() != false){
          this.selectedPawn.xValue--;
        } 
          break;
  }
  return true;
}
return false;
}

moveCommandIsValid(): boolean {
  var newObject = new PawnInfo(this.selectedPawn.xValue, this.selectedPawn.yValue, this.selectedPawn.direction,this.selectedPawn.team);
  switch (this.selectedPawn.direction) {
      case Directions.North:
        newObject.yValue++;
          break;
      case Directions.East:
        newObject.xValue++;
          break;
      case Directions.South:
        newObject.yValue--;
          break;
      case Directions.West:
        newObject.xValue--;
          break;
  }

  if (newObject.xValue < 0 || newObject.xValue > 7|| newObject.yValue < 0 || newObject.yValue > 7) {
      return false;
  }

  return true;
}
/**
 * @description check the valid position
 * @returns 
 */
isValidPosition(){
  if (this.selectedPawn.xValue < 0 || this.selectedPawn.xValue > 7|| this.selectedPawn.yValue < 0 || this.selectedPawn.yValue > 7) {
    return false;
  }
  return true
}
/**
 * @description Pawn direction updates
 * @param incrementClockWise 
 */
 setPawnDirection(incrementClockWise: boolean): void {
  if (incrementClockWise == false) {
    switch (this.selectedPawn.direction) {
      case Directions.North:
        this.selectedPawn.direction = Directions.West;
          break;
      case Directions.East:
        this.selectedPawn.direction = Directions.North;
          break;
      case Directions.South:
        this.selectedPawn.direction = Directions.East;
          break;
      case Directions.West:
        this.selectedPawn.direction = Directions.South;
          break;
  }
  }
  else {
    switch (this.selectedPawn.direction) {
      case Directions.North:
        this.selectedPawn.direction = Directions.East;
          break;
      case Directions.East:
        this.selectedPawn.direction = Directions.South;
          break;
      case Directions.South:
        this.selectedPawn.direction = Directions.West;
          break;
      case Directions.West:
        this.selectedPawn.direction = Directions.North;
          break;
  }
  
}
 }
 /**
  * @description clear the board
  * @param board 
  * @returns 
  */
clearBoard(board){
  return [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
];
}
}
