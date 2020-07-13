import { IStory } from '@core/model/story/story';
import { IStoryDataContainer } from '@core/model/story/story-data-container';
import { IStoryDataWrapper } from '@core/model/story/story-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';

export class StoryService extends CoreServiceBase<IStory, IStoryDataContainer, IStoryDataWrapper>{
    constructor(http: HttpClient) {
        super('characters', http)
    }
}