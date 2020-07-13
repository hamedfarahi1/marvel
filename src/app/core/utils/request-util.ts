import { HttpParams } from '@angular/common/http';
import { QueryParam } from '@core/service/service.configs';

export const createRequestOption = (req?: QueryParam): HttpParams => {
	let options: HttpParams = new HttpParams();
	if (req) {
		Object.keys(req).forEach(key => {
			if (key !== 'orderBy' && key !== 'filter') {
				options = options.set(key, req[key]);
			}
		});
		if (req.orderBy) {
			options = options.append('orderBy', req.orderBy);
		}
		if (req.filter) {
			req.filter.forEach(item => {
				options = options.append(item.key, item.value);
			});
		}
	}

	return options;
};
