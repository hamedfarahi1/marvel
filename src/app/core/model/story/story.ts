import { IBaseList } from '../base/base-list';
import { IBaseSummary } from '../base/base-summary';
import { IBaseModel } from '../base/base-model';
import { ISeriesList, ISeries } from '../series/series';
import { ICreatorList } from '../creators/creator';
import { IComicSummary, IComicList } from '../comic/comic';
import { ICharacterList } from '../character/character';
import { IImage } from '../image/image';
import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface IStory extends IBaseModel {
    title?: string;
    description?: string;
    type?: string;
    thumbnail?: IImage;
    comics?: IComicList;
    stories?: IStoryList;
    characters?: ICharacterList;
    series?: ISeriesList;
    creators?: ICreatorList;
    originalissue?: IComicSummary;
}

export class Series implements ISeries {
    constructor(
        public id?: number,
        public modified?: Date,
        public resourceURI?: string,
        public events?: IEventList,
        public urls?: IUrl[],
        public description?: string,
        public title?: string,
        public type?: string,
        public thumbnail?: IImage,
        public stories?: IStoryList,
        public comics?: IComicList,
        public characters?: ICharacterList,
        public creators?: ICreatorList,
        public series?: ISeriesList,
        public originalissue?: IComicSummary,
    ) {}

    toString():string {
        return this.title + ' - ' + this.description.substr(0, 10);
    }

    public get entityName():string {
        return 'Story'
    }

    public get validators() {
        return {}
    }
}

export interface IStorySummary extends IBaseSummary {
    type?: string;
}

export interface IStoryList extends IBaseList<IStorySummary> {
}