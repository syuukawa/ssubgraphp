require('babel-register')
require('babel-polyfill')
// const HDWalletProvider = require('truffle-hdwallet-provider')
var HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic =
    'fortune organ miss junior element mirror time wing multiply diagram scale between'
//address: 0xED36A54b191870B4D582D65a2902CA89DE219908
    
const ropstenNode =
	'https://ropsten.infura.io/v3/fbcc3edecdff40cdaa672967b12c7759'

const kovanNode = 'https://kovan.infura.io/v3/fbcc3edecdff40cdaa672967b12c7759'

const kovanMnemonic =
	'sand gesture arena define mango virtual public educate figure source goose dismiss'

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 8545,
			network_id: '*',
		},
		ropsten: {
			provider: function() {
				return new HDWalletProvider(mnemonic, ropstenNode)
			},
			network_id: '3',
			networkCheckTimeout: 1e9,
            gas: 5500000,
            gasPrice: 10000000000,
            skipDryRun: true              
		},
		kovan: {
			provider: () => new HDWalletProvider(kovanMnemonic, kovanNode),
			network_id: 42,
			networkCheckTimeout: 1e9,
            gas: 5500000,
            gasPrice: 10000000000,
            skipDryRun: true            
		},
	},
	compilers: {
		solc: {
			version: '0.4.25', // Fetch exact version from solc-bin (default: truffle's version)
		},
	},
}
