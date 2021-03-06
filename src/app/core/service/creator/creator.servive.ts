import { ICreator } from '@core/model/creators/creator';
import { ICreatorDataContainer } from '@core/model/creators/creator-data-container';
import { ICreatorDataWrapper } from '@core/model/creators/creator-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainModule } from 'app/main/main.module';

@Injectable({
    providedIn: 'root'
})
export class CreatorService extends CoreServiceBase<ICreator, ICreatorDataContainer, ICreatorDataWrapper>{
    constructor(http: HttpClient) {
        super('creators', http)
    }
}