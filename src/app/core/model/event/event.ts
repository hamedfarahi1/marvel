import { IBaseList } from '../base/base-list';
import { IBaseSummary } from '../base/base-summary';
import { IBaseModel } from '../base/base-model';
import { IImage } from '../image/image';
import { IComicList } from '../comic/comic';
import { IStoryList } from '../story/story';
import { ISeriesList } from '../series/series';
import { ICharacterList } from '../character/character';
import { ICreatorList } from '../creators/creator';
import { IUrl } from '../url/url';


export interface IEvent extends IBaseModel {
    title?: string;
    description?: string;
    start?: Date;
    end?: Date;
    thumbnail?: IImage;
    comics?: IComicList;
    stories?: IStoryList;
    series?: ISeriesList;
    characters?: ICharacterList;
    creators?: ICreatorList;
    next?: IEventSummary;
    previous?: IEventSummary;
}

export class Event implements IEvent {
    constructor(
        public id?: number,
        public modified?: Date,
        public resourceURI?: string,
        public events?: IEventList,
        public urls?: IUrl[],
        public description?: string,
        public title?: string,
        public start?: Date,
        public end?: Date,
        public thumbnail?: IImage,
        public stories?: IStoryList,
        public series?: ICreatorList,
        public comics?: IComicList,
        public characters?: ICharacterList,
        public creators?: ICreatorList,
        public next?: IEventSummary,
        public previous?: IEventSummary,
    ) {}

    toString():string {
        return this.title + ' - ' + this.description.substr(0, 10);
    }

    public get entityName():string {
        return 'Event'
    }

    public get validators() {
        return {}
    }
}

export interface IEventSummary extends IBaseSummary {

}

export interface IEventList extends IBaseList<IEventSummary> {

}