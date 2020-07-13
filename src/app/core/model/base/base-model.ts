import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface IBaseModel {
    readonly entityName: string;
	readonly validators: {};
    toString(): string;
    
    id?: number;
    modified?: Date;
    resourceURI?: string;
    events?: IEventList;
    urls?: IUrl[];
}