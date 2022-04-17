require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift razor six huge hockey inhale food gas'; 
let testAccounts = [
"0x3fc2dcebc3a2ede546057b47df595b52968b4858b56066ab8b722dde9c4563c1",
"0x078316772956f0a6fbe2cd602a94f7f68f6f212cb2f135329f0694ef769ffe1e",
"0x9d7dd64e2d833a105a29046b87d4ea898cd4700e28726e381997bfa151182db8",
"0x4dbbd5d64d4c7e8a715d389bdbc6d57896f515f97c11e53c61d2dd333a10ddd9",
"0xaad64c7a0019082a45dc951bd56efe9161bdf611cc65df9340f0bf2c99385281",
"0x65758f5add0f9024c7554971f8d0bfaa994c2b6c6f951dda92dd4ed876579bcf",
"0x9454225b704230497b4007fb3df4780413913b812ee035b275c4b7052b84d98f",
"0x7a9c231fdbf4ec8c7117632877bcb8f61930919c2e7dc7509a546e063349192a",
"0x2b3c991671982fe7ae05f380b85e645141205a1979bd7c4081f3e270c10d94d5",
"0xf39b7854d59e80f23f272553f80e1ffe16b6d4c084e3da7c8cb2e48ec7520636"
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
            version: '^0.8.0'
        }
    }
};

