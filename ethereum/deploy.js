const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
    'social trash hat south snow silent honey level frozen coyote system mule',
    'https://rinkeby.infura.io/v3/892ea09a671746fda74b02f56809cecb',
);

const web3 = new Web3(provider);

const deploy = async() => {
    //Get a list of all accounts
   accounts = await web3.eth.getAccounts();

   console.log('Attempting to deploy from account', accounts[0]);

   //Use one of those accounts to deploy 
   //the contract
   const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                        .deploy({ data: compiledFactory.bytecode })
                        .send({ from: accounts[0], gas: '1000000' }); 
    console.log('Contract deployed to', result.options.address);            
};

deploy();
