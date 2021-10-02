require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');

const ETH_NODE_URL = process.env.ETH_NODE_URL;

/*
// example task
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
*/

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  //defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: ETH_NODE_URL
      },
      rinkeby: {
        url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"]
      }
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  abiExporter: {
    path: './abi/',
    clear: true,
    flat: true,
    spacing: 2
  }
};
