const Ethereum = require('./ethereum/ethereum');
const CindercloudAPI = require('./cindercloud/cindercloud-api');
const CindercloudWebsocketAPI = require('./cindercloud/cindercloud-websocket-api');

module.exports = class Cindercloud {

	constructor(configProps) {
		if (configProps == null) {
			configProps = {}
		}
		CindercloudAPI.initialize(configProps);
		CindercloudWebsocketAPI.initialize(configProps);
	}

	ethereum() {
		return new Ethereum();
	}

	version() {
		return '0.0.1';
	}
};