import { IBaseList } from '../base/base-list';
import { IBaseSummary } from '../base/base-summary';
import { IBaseModel } from '../base/base-model';
import { IImage } from '../image/image';
import { IComicList } from '../comic/comic';
import { IStoryList } from '../story/story';
import { ICharacterList } from '../character/character';
import { ICreatorList } from '../creators/creator';
import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface ISeries extends IBaseModel {
    title?: string;
    description?: string;
    startYear?: number;
    endYear?: number;
    rating?: string;
    thumbnail?: IImage;
    comics?: IComicList;
    stories?: IStoryList;
    characters?: ICharacterList;
    creators?: ICreatorList;
    next?: ISeriesSummary;
    previous?: ISeriesSummary;
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
        public rating?: string,
        public startYear?: number,
        public endYear?: number,
        public thumbnail?: IImage,
        public stories?: IStoryList,
        public comics?: IComicList,
        public characters?: ICharacterList,
        public creators?: ICreatorList,
        public next?: ISeriesSummary,
        public previous?: ISeriesSummary,
    ) {}

    toString():string {
        return this.title + ' - ' + this.description.substr(0, 10);
    }

    public get entityName():string {
        return 'Series'
    }

    public get validators() {
        return {}
    }
}

export interface ISeriesSummary extends IBaseSummary {
}

export interface ISeriesList extends IBaseList<ISeriesSummary> {
}