require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY + ""],
    },
    goerli: {
      url: process.env.GOERLI_URL + "",
      accounts: [process.env.PRIVATE_KEY + ""],
    },
  },
};
