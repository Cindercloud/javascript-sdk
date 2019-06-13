const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumToken {

	constructor(tokenAddress) {
		this.tokenAddress = tokenAddress;
	}

	getInfo() {
		return CindercloudAPI.get(`/api/ethereum/token/${this.tokenAddress}`);
	}
};