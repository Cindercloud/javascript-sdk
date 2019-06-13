const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumERC20 {

	constructor(tokenAddress) {
		this.tokenAddress = tokenAddress;
	}

	balanceOf(address) {
		return CindercloudAPI.get(`/api/ethereum/erc20/${this.tokenAddress}/balance/${address}`);
	}

	listenForTransfers() {
		return CindercloudAPI.listen(`/api/ethereum/erc20/${this.tokenAddress}/transfer-events`);
	}
};