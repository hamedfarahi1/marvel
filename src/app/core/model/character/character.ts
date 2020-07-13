import { IBaseModel } from '../base/base-model';
import { IImage } from '../image/image';
import { IComicList } from '../comic/comic';
import { IStoryList } from '../story/story';
import { ISeriesList } from '../series/series';
import { IBaseSummary } from '../base/base-summary';
import { IBaseList } from '../base/base-list';
import { IEventList } from '../event/event';
import { IUrl } from '../url/url';

export interface ICharacter extends IBaseModel{
    name?: string;
    description?: string;
    thumbnail?: IImage;
    comics?: IComicList;
    stories?: IStoryList;
    series?: ISeriesList;
}

export class Character implements ICharacter {
    constructor(
        public id?: number,
        public modified?: Date,
        public resourceURI?: string,
        public events?: IEventList,
        public urls?: IUrl[],
        public name?: string,
        public description?: string,
        public thumbnail?: IImage,
        public comics?: IComicList,
        public stories?: IStoryList,
        public series?: ISeriesList,
    ) {}

    toString():string {
        return this.name + ' - ' + this.description.substr(0, 10)  + '...';
    }

    public get entityName():string {
        return 'character'
    }

    public get validators() {
        return {}
    }
}

export interface ICharacterSummary extends IBaseSummary {
    role?: string;
}

export interface ICharacterList extends IBaseList<ICharacterSummary> {
}

