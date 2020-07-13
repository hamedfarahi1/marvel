import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface ModelBase {
    readonly entityName: string;
	readonly validators: {};
    toString(): string;
    
    id?: number;
    modified?: Date;
    resourceURI?: string;
    events?: IEventList;
    urls?: IUrl[];
}