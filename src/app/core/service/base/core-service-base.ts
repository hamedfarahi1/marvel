import { ModelBase } from '@core/model/base/mode-base';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryParam } from '../service.configs';
import { Observable } from 'rxjs';
import { IBaseDataWrapper } from '@core/model/base/base-data-wrapper';
import { createRequestOption } from '@core/utils/request-util';
import { KeyValue } from '@angular/common';
import { map } from 'rxjs/operators';
import { Optional, isPresent } from '@core/typings/optional';
import { IBaseDataContainer } from '@core/model/base/base-data-container';

export abstract class CoreServiceBase<T extends ModelBase, Container extends IBaseDataContainer<T>, Wrapper extends IBaseDataWrapper<T, Container>> {
    public baseUrl:string = 'http://gateway.marvel.com/v1/public/'
	protected constructor(protected resourceName: string, protected http: HttpClient) {
    }
    
    public find(id: number): Observable<Wrapper> {
		return this.http.get<Wrapper>(`${this.baseUrl + this.resourceName}/${id}`);
	}
    public read(page: number, pageSize: number, orderBy: string, filter: KeyValue<string, string>[], subProp?: SubProp): Observable<Wrapper> {
        const opt = <QueryParam>{
			offset: page - 1,
			limit: pageSize,
			orderBy: orderBy,
			filter: filter
        };
        if (isPresent(subProp))
		    return this.query(opt, subProp).pipe(map(data => {
		    	return <Wrapper>data
            }));
        else 
            return this.query(opt).pipe(map(data => {
			    return <Wrapper>data
         }));
	}

	public readAll(filter: KeyValue<string, string>[]): Observable<Wrapper> {
		return this.query(<QueryParam>{
			filter: filter
		});
	}


    public query(req?: QueryParam, subProp?: SubProp): Observable<Wrapper> {
        const options = createRequestOption(req);
        if (isPresent(subProp))
            return this.http.get<Wrapper>(this.baseUrl + this.resourceName + `/${subProp.id}/${subProp.prop}`, { params: options});
        else
            return this.http.get<Wrapper>(this.baseUrl + this.resourceName, { params: options});

	}
}

export interface SubProp {
    id?: number;
    prop?: string;
}