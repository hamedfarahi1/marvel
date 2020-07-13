import { IBaseSummary } from '../base/base-summary';
import { IBaseList } from '../base/base-list';
import { ModelBase } from '../base/mode-base';
import { IImage } from '../image/image';
import { ISeriesList } from '../series/series';
import { IStoryList } from '../story/story';
import { IComicList } from '../comic/comic';
import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface ICreator extends ModelBase {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    fullName?: string;
    thumbnail?: IImage;
    series?: ISeriesList;
    stories?: IStoryList;
    comics?: IComicList;
}

export class Creator implements ICreator {
    constructor(
        public id?: number,
        public modified?: Date,
        public resourceURI?: string,
        public events?: IEventList,
        public urls?: IUrl[],
        public thumbnail?: IImage,
        public stories?: IStoryList,
        public suffix?: string,
        public fullName?: string,
        public firstName?: string,
        public middleName?: string,
        public lastName?: string,
        public series?: ICreatorList,
        public comics?: IComicList,
    ) {}

    toString():string {
        return this.fullName;
    }

    public get entityName():string {
        return 'Creator'
    }

    public get validators() {
        return {}
    }
}

export interface ICreatorSummary extends IBaseSummary {
    role?: string;
}

export interface ICreatorList extends IBaseList<ICreatorSummary> {
}