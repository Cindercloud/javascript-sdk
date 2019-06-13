const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumContract {

	constructor(address) {
		this.address = address;
	}

	getAbi() {
		return CindercloudAPI.get(`/api/ethereum/contract/${this.address}/abi`);
	}

	getSource() {
		return CindercloudAPI.get(`/api/ethereum/contract/${this.address}/source`);
	}
};