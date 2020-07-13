import { IBaseList } from '../base/base-list';
import { IBaseSummary } from '../base/base-summary';
import { IBaseModel } from '../base/base-model';
import { ITextObject } from '../text-object/TextObject';
import { ISeriesSummary, ISeriesList } from '../series/series';
import { IImage } from '../image/image';
import { ICharacterList } from '../character/character';
import { IStoryList } from '../story/story';
import { ICreatorList } from '../creators/creator';
import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface IComic extends IBaseModel {
    digitalId?: number;
    title?: string;
    issueNumber?: number;
    variantDescription?: string;
    description?: string;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    pageCount?: number;
    textObjects?: ITextObject[];
    series?: ISeriesSummary;
    variants?: IComicSummary[];
    collections?: IComicSummary[];
    collectedIssues?: IComicSummary[];
    dates?: IComicDate[];
    prices?: IComicPrice[];
    thumbnail?: IImage;
    images?: IImage[];
    creators?: ICreatorList;
    character?: ICharacterList;
    stories?: IStoryList;
}

export class Comic implements IComic {
    constructor(
        public id?: number,
        public modified?: Date,
        public resourceURI?: string,
        public events?: IEventList,
        public urls?: IUrl[],
        public description?: string,
        public thumbnail?: IImage,
        public stories?: IStoryList,
        public digitalId?: number,
        public title?: string,
        public issueNumber?: number,
        public variantDescription?: string,
        public isbn?: string,
        public upc?: string,
        public diamondCode?: string,
        public ean?: string,
        public issn?: string,
        public format?: string,
        public pageCount?: number,
        public textObjects?: ITextObject[],
        public variants?: IComicSummary[],
        public collections?: IComicSummary[],
        public collectedIssues?: IComicSummary[],
        public dates?: IComicDate[],
        public prices?: IComicPrice[],
        public images?: IImage[],
        public creators?: ICreatorList,
        public character?: ICharacterList,
    ) {}

    toString():string {
        return this.title + ' - ' + this.description.substr(0, 10)  + '...';
    }

    public get entityName():string {
        return 'comic'
    }

    public get validators() {
        return {}
    }
}



export interface IComicSummary extends IBaseSummary {
}

export interface IComicList extends IBaseList<IComicSummary> {
}

export interface IComicDate {
    type?: string;
    date?: Date;
}

export interface IComicPrice {
    type?: string;
    price?: number;
}