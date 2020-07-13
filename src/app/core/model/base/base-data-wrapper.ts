import { IBaseDataContainer } from './base-data-container';
import { IBaseModel } from './base-model';

export interface IBaseDataWrapper<M extends IBaseModel ,IDataContainer extends IBaseDataContainer<M>> {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    etag?:string;
    data?: IDataContainer;
}