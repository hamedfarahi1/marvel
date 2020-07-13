import { ISeries } from '@core/model/series/series';
import { ISeriesDataContainer } from '@core/model/series/series-data-container';
import { ISeriesDataWrapper } from '@core/model/series/series-data-wrapper';
import { CoreServiceBase } from '../base/core-service-base';
import { HttpClient } from '@angular/common/http';

export class SeriesService extends CoreServiceBase<ISeries, ISeriesDataContainer, ISeriesDataWrapper>{
    constructor(http: HttpClient) {
        super('characters', http)
    }
}