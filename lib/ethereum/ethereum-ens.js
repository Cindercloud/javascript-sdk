const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumEns {

	resolve(ensName) {
		return CindercloudAPI.get(`/api/ethereum/ens/resolve/${ensName}`);
	}
};