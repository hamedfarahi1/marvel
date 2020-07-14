import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from './filter.actions';
import { IState } from './state-model';
 
export const initialState: IState = {
    page: 0,
    pageSize: 3,
    orderBy: 'name',
    filter: null
};
 
export function filterReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SetPage:
      return {
          ...state,
          page: action.correctPage * 3
      };
    case ActionTypes.SetFilters:
      return {
          ...state,
          filter: action.filters
      };
 
    case ActionTypes.ReturnFilters:
        return initialState;
   
    default:
      return state;
  }
}