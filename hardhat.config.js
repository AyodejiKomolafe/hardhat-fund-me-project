require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{ version: "0.8.24" }, { version: "0.6.6" }],
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_RPC_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_RPC_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
