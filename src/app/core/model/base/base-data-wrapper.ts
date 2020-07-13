import { IBaseDataContainer } from './base-data-container';
import { ModelBase } from './mode-base';

export interface IBaseDataWrapper<M extends ModelBase ,IDataContainer extends IBaseDataContainer<M>> {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    etag?:string;
    data?: IDataContainer;
}