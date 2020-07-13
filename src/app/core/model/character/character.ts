import { ModelBase } from '@core/model/base/mode-base';
import { IImage } from '@core/model/image/image';
import { IComicList } from '@core/model/comic/comic';
import { IStoryList } from '@core/model/story/story';
import { ISeriesList } from '@core/model/series/series';
import { IBaseSummary } from '@core/model/base/base-summary';
import { IBaseList } from '@core/model/base/base-list';
import { IEventList } from '@core/model/event/event';
import { IUrl } from '@core/model/url/url';

export interface ICharacter extends ModelBase{
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

