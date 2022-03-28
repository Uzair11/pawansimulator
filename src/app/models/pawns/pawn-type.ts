import { Directions } from "../directions";

export enum PawnType {
    White = 1,
    Black = 2
}

export class PawnInfo {
    xValue:number;
    yValue:number;
    direction:Directions;
    team:PawnType;

    constructor(xValue,yValue,direction,team){
        this.xValue = xValue;
        this.yValue = yValue;
        this.direction = direction;
        this.team = team;
    }

}