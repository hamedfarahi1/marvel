import { ActionTypes, ActionsUnion } from './save.actions';
import { ICharacter } from '@core/model/character/character';
 
export const initialState: ICharacter[] = [];
 
export function savingReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SaveCharacter:
      return [...state, action.character];

    case ActionTypes.UnsaveCharacter:
      return state.filter(items => items.id !== action.characterId);

    default:
      return state;
  }
}