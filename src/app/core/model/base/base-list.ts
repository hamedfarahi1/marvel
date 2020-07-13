import { IBaseSummary } from './base-summary';

export interface IBaseList<T extends IBaseSummary> {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: T[]
}