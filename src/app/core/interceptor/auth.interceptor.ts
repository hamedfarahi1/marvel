import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authConstant } from './interceptor-constants';
import { url } from 'inspector';


export class AuthInterceptor implements HttpInterceptor {
	constructor() { }

	// tslint:disable-next-line:no-any
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request || !request.url || (/^http/.test(request.url))) {
			return next.handle(request);
		}

		const apyKey = authConstant.apyKey;
		const hash = authConstant.hash;
		if (!!apyKey && !!hash) {
			request = request.clone({
				url: `${url}&apyKey=${apyKey}&hash=${hash}`
			});
		}
		return next.handle(request);
	}
}
