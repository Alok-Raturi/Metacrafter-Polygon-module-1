const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const Warrior = require("../artifacts/contracts/Warrior.sol/Warrior.json");
require("dotenv").config();

async function main() {
  const NFT = await ethers.getContractAt(
    Warrior.abi,
    process.env.POLYGON_ADDRESS + ""
  );

  console.log(
    "Wallet balance : ",
    (await NFT.balanceOf(process.env.WALLET_ADDRESS)).toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
