const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const Warrior = require("../artifacts/contracts/Warrior.sol/Warrior.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(Warrior.abi, contractAddress);

  const NFTName = await NFT.getName();
  console.log("\nNFT name : ", NFTName);

  const NFTsymbol = await NFT.getSymbol();
  console.log("\nNFT symbol : ", NFTsymbol);

  const prompt = await NFT.promptDescription();
  console.log("\nPrompt used to generate images : \n", prompt + "\n");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
