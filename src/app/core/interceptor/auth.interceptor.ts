import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authConstant } from './interceptor-constants';
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() { }

	// tslint:disable-next-line:no-any
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request || !request.url) {
			return next.handle(request);
		}

		// add api key and hash for requests
		const apyKey = authConstant.apyKey;
		const hash = authConstant.hash;
		if (!!apyKey && !!hash) {
			request = request.clone({
				setHeaders: {
					'Accept': '*/*'
				},
				setParams: {
					'apikey': apyKey,
					'hash': hash,
					// just for this project
					'ts': '1565922410'
					
				}
			});
		}
		return next.handle(request);
	}
}
