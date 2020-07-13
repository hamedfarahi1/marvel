import { IBaseDataWrapper } from '../base/base-data-wrapper';
import { IStory } from './story';
import { IStoryDataContainer } from './story-data-container';

export interface IStoryDataWrapper extends IBaseDataWrapper<IStory, IStoryDataContainer> {
    
}