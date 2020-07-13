import { IComic } from '@core/model/comic/comic';
import { IComicDataContainer } from '@core/model/comic/comic-data-container';
import { IComicDataWrapper } from '@core/model/comic/comic-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';

export class ComicService extends CoreServiceBase<IComic, IComicDataContainer, IComicDataWrapper>{
    constructor(http: HttpClient) {
        super('comics', http)
    }
}