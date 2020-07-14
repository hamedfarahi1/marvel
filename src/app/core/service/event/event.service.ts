import { IEvent } from '@core/model/event/event';
import { IEventDataContainer } from '@core/model/event/event-data-container';
import { IEventDataWrapper } from '@core/model/event/event-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainModule } from 'app/main/main.module';

@Injectable({
    providedIn: 'root'
})
export class EventService extends CoreServiceBase<IEvent, IEventDataContainer, IEventDataWrapper>{
    constructor(http: HttpClient) {
        super('characters', http)
    }
}