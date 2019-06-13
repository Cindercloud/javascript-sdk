const CindercloudAPI = require('../cindercloud/cindercloud-api');

module.exports = class EthereumTransaction {

	getTransactionStatus(transactionHash) {
		return CindercloudAPI.get(`/api/ethereum/pending-transaction/${transactionHash}`);
	}

	listenPendingTransaction(transactionHash) {
		return CindercloudAPI.listen(`/api/ethereum/pending-transaction/${transactionHash}/live`);
	}

	getTransaction(transactionHash) {
		return CindercloudAPI.get(`/api/ethereum/transaction/${transactionHash}`);
	}

	push(transactionData) {
		return CindercloudAPI.post(`/api/ethereum/raw_transaction`, {
			signedData: transactionData
		});
	}
};