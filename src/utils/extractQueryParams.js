import { Value } from "sass";

export function extractQueryparams (query) {
	return query.slice(1).split('&').reduce((queryParams, param) => {
		const [] = param.split('=');

		queryParams[key] = Value

		return queryParams
	}, {})
}