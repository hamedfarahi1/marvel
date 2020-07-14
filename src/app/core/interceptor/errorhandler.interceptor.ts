import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

export class ErrorHandlerInterceptor implements HttpInterceptor {
	constructor(
	 private toastr: ToastrService
	) {
	}

	intercept(
		// tslint:disable-next-line:no-any
		request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			tap(
				(response) => {
					// log for a successfull request
					if (response instanceof HttpResponse) {}
				},
				(err) => {
					if (err instanceof HttpErrorResponse) {
						 // handle errors
					}
				}
			)
		);
	}
}
