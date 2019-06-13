const EthereumAccount = require('./ethereum-account');
const EthereumEns = require('./ethereum-ens');
const EthereumERC20 = require('./ethereum-erc20');
const EthereumToken = require('./ethereum-token');
const EthereumTransaction = require('./ethereum-transaction');
const EthereumContract = require('./ethereum-contract');
const EthereumContracts = require('./ethereum-contracts');
const EthereumBlock = require('./ethereum-block');

module.exports = class Ethereum {

	account(address) {
		return new EthereumAccount(address);
	}

	ens() {
		return new EthereumEns();
	}

	erc20(tokenAddress) {
		return new EthereumERC20(tokenAddress);
	}

	token(tokenAddress) {
		return new EthereumToken(tokenAddress);
	}

	contract(tokenAddress) {
		return new EthereumContract(tokenAddress);
	}

	contracts() {
		return new EthereumContracts();
	}

	transaction() {
		return new EthereumTransaction();
	}

	block() {
		return new EthereumBlock();
	}
};