import { Component } from '@angular/core';
import { ChessPawnBoard } from '../models/chess-board/chess-board';
import { Directions } from '../models/directions';
import { BLACK_KING } from '../models/pawns/black-pawns';
import { PawnType } from '../models/pawns/pawn-type';
import { WHITE_KING } from '../models/pawns/white-pawns';
import { PawnSimulationService } from '../services/pawn-simulation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showBoard = false;
  chessPawnBoardObj: any;
  reportText = ""
  pawnSteps = [];
  showPlaceCommand = false;
  showLeftCommand = false;
  showRightCommand = false;
  showMoveCommand = false;
  showReportCommand = false;
  constructor(private pawnSimulator:PawnSimulationService) {}
  ngOnInit() {
    this.setupBoard();
  }

  setupBoard(){
    this.showBoard = true;
    this.chessPawnBoardObj = ChessPawnBoard.clearBoard;
  }

  // Colors the Chess Board on condition
  calcBoxColor(r, c) {
    return ((r + c) % 2 === 1);
  }


  checkSteps(r, c) {
    for (let count = 0; count < this.pawnSteps.length; count++) {
      if (r === this.pawnSteps[count].r && c === this.pawnSteps[count].c) { return true; }
    }
    return false;
  }

  getImageOnIndex(chessCol, r, c) {
    if (chessCol) {
      return chessCol.img;
    }
    return 'assets/pawns/default.png';
  }

  errorHandler(event, r, c) {
    console.log(r, c);
    event.target.src = 'assets/pawns/default.png';
  }

  placePawn(){
    this.showPlaceCommand = true;
  }
/**
 * @description execute place command for pawn
 * @param dataForCommand 
 */
  executePlaceCommand(dataForCommand){
    this.chessPawnBoardObj = this.pawnSimulator.setPlaceCommand(dataForCommand,this.chessPawnBoardObj);
    this.showPlaceCommand = false;
  }

  /**
   * @description move pawn nby one unit
   */
  movePawn(){
    if(this.pawnSimulator.moveCommand()){
      this.chessPawnBoardObj = this.pawnSimulator.setupBoard(this.chessPawnBoardObj);
    }
  }

  /**
   * @description rotate pawn to left
   */
  leftRotatePawn(){
    this.pawnSimulator.setPawnDirection(false)
  }
/**
   * @description rotate pawn to right
   */
  rightRotatePawn(){
    this.pawnSimulator.setPawnDirection(true)
  }

  reportPawn(){
    this.reportText = this.pawnSimulator.selectedPawn.xValue + " " 
    + this.pawnSimulator.selectedPawn.yValue +" " 
    + Directions[this.pawnSimulator.selectedPawn.direction]
  }
}
