// Deploying a smart contract to the Ethereum blockchain using Truffle ( a development framework for Ethereum).

// is a Truffle function that retrieves the compiled contract artifact for the "Migrations" contract
const Migrations = artifacts.require("Migrations");


//module export statement for the deployment script. It makes the function available to Truffle when running deployment commands
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};


/*
this code is a migration script that tells Truffle to deploy the Migrations contract to the blockchain.
 This is typically one of the initial steps in setting up a new project with Truffle,
 ensuring that the deployment process can be managed effectively.
*/