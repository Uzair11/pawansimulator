import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { PawnInfo } from 'src/app/models/pawns/pawn-type';

@Component({
  selector: 'app-place-command',
  templateUrl: './place-command.component.html',
  styleUrls: ['./place-command.component.scss'],
})
export class PlaceCommandComponent implements OnInit {
  @Output() executePlaceCommand = new EventEmitter<any>();
  placeCommandForm: FormGroup;
  constructor() { }
  ngOnInit() {
    this.placeCommandForm = new FormGroup({
      xValue: new FormControl('', [Validators.required,Validators.min(0), Validators.max(8)]),
      yValue: new FormControl('', [Validators.required,Validators.min(0), Validators.max(8)]),
      direction: new FormControl('',[Validators.required]),
      pawnType: new FormControl('',Validators.required)
    })
  }

  executeCommand(){
    this.executePlaceCommand.emit(this.placeCommandForm.value)
  }
}
