import {ajax} from 'rxjs/ajax';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

module.exports = class CindercloudAPI {
	static initialize(apiConfig) {
		this.defaultBaseUrl = apiConfig.baseUrl || 'https://api.cinder.cloud';
	}

	static get(url) {
		return ajax({
				url: `${this.defaultBaseUrl}${url}`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).pipe(
			map(x => {
				return x.response;
			}),
			catchError(error => {
				return of(error);
			})
		);
	}

	static post(url, data) {
		return ajax({
				url: `${this.defaultBaseUrl}${url}`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		).pipe(
			map(x => {
				return x.response;
			}),
			catchError(error => {
				return of(error);
			})
		);
	}

	static getObservable(url) {
		return ajax.getJSON(`${this.defaultBaseUrl}${url}`).pipe(
			map(resp => {
				console.log('response: ', resp);
				return resp;
			}),
			catchError(error => {
				console.log('error: ', error);
				return of(error);
			})
		);
	}

	static listen(url) {
		return Observable.create(observer => {
			const eventSource = new EventSource(`${this.defaultBaseUrl}${url}`);
			eventSource.onmessage = x => observer.next(x.data);
			eventSource.onerror = x => observer.error(x);

			return () => {
				eventSource.close();
			};
		});
	}

	static withHeaders(data) {
		return {
			data: data,
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "*",
				'accept': 'application/json'
			}
		}
	}
};