const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumAccount {

	constructor(address) {
		this.address = address;
	}

	getBalance() {
		return CindercloudAPI.get(`/api/ethereum/address/${this.address}/balance`);
	}

	getNonce() {
		return CindercloudAPI.get(`/api/ethereum/address/${this.address}/nonce`);
	}

	getTokens() {
		return CindercloudAPI.get(`/api/ethereum/address/${this.address}/tokens`);
	}
};