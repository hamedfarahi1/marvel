import { KeyValue } from '@angular/common';

export type QueryParam = StringIndexer & {
	offset?: number;
	limit?: number;
	orderBy?: string;
	filter?: KeyValue<string, string>[];
};
export type QueryParamRoute = StringIndexer & {
	offset?: number;
	limit?: number;
	orderBy?: string;
	filter?: string;
};

export interface StringIndexer {
	[key: string]: string;
}

