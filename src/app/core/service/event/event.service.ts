import { IEvent } from '@core/model/event/event';
import { IEventDataContainer } from '@core/model/event/event-data-container';
import { IEventDataWrapper } from '@core/model/event/event-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';

export class EventService extends CoreServiceBase<IEvent, IEventDataContainer, IEventDataWrapper>{
    constructor(http: HttpClient) {
        super('characters', http)
    }
}