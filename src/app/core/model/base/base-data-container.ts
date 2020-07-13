import { ModelBase } from './mode-base';

export interface IBaseDataContainer<T extends ModelBase> {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: T[];
}