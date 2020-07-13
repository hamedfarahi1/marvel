import { IBaseModel } from './base-model';

export interface IBaseDataContainer<T extends IBaseModel> {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: T[];
}