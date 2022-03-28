import { TestBed } from '@angular/core/testing';
import { PawnInfo } from '../models/pawns/pawn-type';

import { PawnSimulationService } from './pawn-simulation.service';

describe('PawnSimulationService', () => {
  let service: PawnSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PawnSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Move a pawn', () => {
    const select4dpawn = new PawnInfo(0,0,1,1);
    service.selectedPawn = select4dpawn
    const testValue = service.moveCommand();
    expect(testValue).toEqual(true);
  
  });
  it('Move a pawn', () => {
    const select4dpawn = new PawnInfo(-2,0,1,1);
    service.selectedPawn = select4dpawn
    const testValue = service.moveCommand();
    expect(testValue).toEqual(false);
  });

  it('change a pawn left direction', () => {
    const select4dpawn = new PawnInfo(2,0,1,1);
    service.selectedPawn = select4dpawn
    const testValue = service.setPawnDirection(true);
    expect(testValue).toEqual();
  });
  it('change a pawn right direction', () => {
    const select4dpawn = new PawnInfo(2,0,1,1);
    service.selectedPawn = select4dpawn
    const testValue = service.setPawnDirection(false);
    expect(testValue).toEqual();
  });
});
