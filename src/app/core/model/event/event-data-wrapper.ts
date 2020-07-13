import { IBaseDataWrapper } from '../base/base-data-wrapper';
import { IEvent } from './event';
import { IEventDataContainer } from './event-data-container';

export interface IEventDataWrapper extends IBaseDataWrapper<IEvent, IEventDataContainer> {
    
}