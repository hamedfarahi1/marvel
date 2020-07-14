import { Action } from '@ngrx/store';
import { ICharacter } from '@core/model/character/character';
 
export enum ActionTypes {
  SaveCharacter = '[SavedView Component] Save Character',
  UnsaveCharacter = '[SavedView Component] Unsave Character',
}
 
export class SaveCharacter implements Action {
    constructor(public character: ICharacter) {}
  readonly type = ActionTypes.SaveCharacter;
}

export class UnsaveCharacter implements Action {
    constructor(public characterId: number) {}
    readonly type = ActionTypes.UnsaveCharacter;
  }


export type ActionsUnion = SaveCharacter | UnsaveCharacter;
