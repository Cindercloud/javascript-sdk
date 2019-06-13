const CindercloudAPI = require('../cindercloud/cindercloud-api');
const CindercloudWebsocketAPI = require('../cindercloud/cindercloud-websocket-api');
import {Observable} from 'rxjs';

const retry = require('retry');

module.exports = class EthereumContracts {

	findMethod(encodedInput) {
		return CindercloudAPI.post(`/api/ethereum/contract/read`, {
			input: encodedInput
		});
	}

	read(readContractOptions) {
		const data = {
			abi: readContractOptions.abi,
			address: readContractOptions.address,
			method: readContractOptions.method,
			inputs: readContractOptions.inputs
		};

		return CindercloudAPI.post(`/api/ethereum/contract/read`, data);
	}

	write(writeContractOptions) {
		const data = {
			abi: writeContractOptions.abi,
			address: writeContractOptions.address,
			method: writeContractOptions.method,
			inputs: writeContractOptions.inputs
		};

		return CindercloudAPI.post(`/api/ethereum/contract/execute/prepare`, data);
	}

	eventLive(listenContractEventOptions) {
		const data = {
			abi: JSON.stringify(listenContractEventOptions.abi),
			address: listenContractEventOptions.address,
			event: listenContractEventOptions.event
		};

		return new Observable((observer) => {
			let operation = retry.operation({
				retries: 5,
				minTimeout: 1000,
				maxTimeout: 5000
			});
			operation.attempt((i) => {
				try {
					CindercloudWebsocketAPI.client.subscribe(
						'/user/queue/contract-events',
						(result) => {
							observer.next(result.body);
						});

					CindercloudWebsocketAPI.client.publish({
						destination: "/app/contract/event",
						body: JSON.stringify(data)
					});
				} catch (err) {
					if (!operation.retry(err)) {
						operation.mainError();
					}
				}
			});
		});
	}
};