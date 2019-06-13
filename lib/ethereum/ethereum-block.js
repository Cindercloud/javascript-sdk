const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumBlock {
	getBlock(blockHash) {
		return CindercloudAPI.get(`/api/ethereum/block/${blockHash}`);
	}
};