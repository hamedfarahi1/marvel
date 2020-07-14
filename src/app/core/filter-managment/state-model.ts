import { KeyValue } from '@angular/common';

export interface IState {
    page?: number;
    pageSize?: number;
    orderBy?: string;
    filter?: KeyValue<string, string>[]
}