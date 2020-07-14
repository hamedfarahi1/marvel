import { Action } from '@ngrx/store';
import { KeyValue } from '@angular/common';
 
export enum ActionTypes {
  SetPage = '[Filter Component] Set Page',
  SetFilters = '[Filter Component] Set Filters',
  ReturnFilters = '[Filter Component] Return',
}
 
export class SetPage implements Action {
    constructor(public correctPage: number) {}
  readonly type = ActionTypes.SetPage;
}

export class SetFilters implements Action {
    constructor(public filters: KeyValue<string, string>[]) {}
    readonly type = ActionTypes.SetFilters;
  }
 
export class ReturnFilters implements Action {
  readonly type = ActionTypes.ReturnFilters;
}

export type ActionsUnion = SetPage | SetFilters | ReturnFilters;
