// This script is a deployment script for a Truffle project. It imports the 'TimelessNFT' smart contract,
// retrieves the list of available Ethereum accounts, and deploys the 'TimelessNFT' contract wth specific parameters (name, symbol, account address).
// It is suposed to run during the deployment process


/* eslint-disable no-undef */
const TimelessNFT = artifacts.require('TimelessNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(TimelessNFT, 'Timeless NFTs', 'TNT', 10, accounts[1])
}