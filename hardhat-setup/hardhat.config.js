/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
const accounts = await hre.ethers.getSigners();
for (const account of accounts) {
  console.log(account.address);
}
});

module.exports = {
solidity: {
  version: "0.7.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
},
networks: {
  goerli: {
    url: "",// add your provider here
    accounts: [
      "",
      ""
    ] // add your Ethereum keys here (private keys)
  },
}
};
