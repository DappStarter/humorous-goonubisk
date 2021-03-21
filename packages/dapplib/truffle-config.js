require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain unknown hunt inhale flat squirrel'; 
let testAccounts = [
"0x035e60a9d7df16cd2bad2ee238885761d62b0477809bb9740ea983e2edb06469",
"0xa9302a59ddc62c951f2a531b5fd6e87b1a5de56683c9903fb46b97422a3cc002",
"0x028613f4c1d8afd0d52644bbad551baa4c3624db72e225cea5c2f8852e137c98",
"0x6ca5d4be624b47c4da9afdd7f60091f0b3e1af68a400d0ece060f0f6c63f45dd",
"0xe980e488c913da0be56f558944645a754fd8c6cd6a12e736ed336e0fe8f51e58",
"0x94dd842f34e1da6be263a83f6744de223df3ed533318bff1c36baf6c3a8b8d68",
"0x48d678ba8e7e56e1363df94a712743cb21dc9451bd74b93b7c3b5836b1a07e85",
"0x0fc0456e0d8ede151f094a13269e12dcffb30c8e634d319702575463cc6b971b",
"0x2eafaa3bcad412dff19d54e4fb8d7cdfcab0fa82b036aaa27f6a8679f35d356a",
"0xfea5bb6e545905d217cd33028884a69a753e8a74cb2e7742fe67effcad422a27"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
