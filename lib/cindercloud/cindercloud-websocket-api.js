import {Client} from '@stomp/stompjs';

const SockJS = require('sockjs-client');


module.exports = class CindercloudWebsocketAPI {

	static initialize(apiConfig) {
		let api = this;
		this.connected = false;
		this.defaultBaseUrl = apiConfig.websocketUrl || 'wss://api.cinder.cloud/ws';
		this.client = new Client({
			brokerURL: this.defaultBaseUrl,
			debug: function (str) {
				//console.log(str);
			},
			reconnectDelay: 5000,
			heartbeatIncoming: 4000,
			heartbeatOutgoing: 4000
		});

		if (typeof WebSocket !== 'function') {
			const baseUrl = this.defaultBaseUrl;
			this.client.webSocketFactory = function () {
				return new SockJS(baseUrl + '/sockjs');
			};
		}

		this.client.onConnect = function (frame) {
			api.connected = true;
		};

		this.client.onStompError = function (frame) {
			// Will be invoked in case of error encountered at Broker
			// Bad login/passcode typically will cause an error
			// Complaint brokers will set `message` header with a brief message. Body may contain details.
			// Compliant brokers will terminate the connection after any error
			console.log('Broker reported error: ' + frame.headers['message']);
			console.log('Additional details: ' + frame.body);
		};

		this.client.activate();
	}
};