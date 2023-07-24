const { ethers } = require("hardhat");
const { contractAddress } = require("./contractAddress.js");
const Warrior = require("../artifacts/contracts/Warrior.sol/Warrior.json");
const FXRootContractAbi = require("../FxRootABI.json");
require("dotenv").config();

async function main() {
  const WarriorContract = await ethers.getContractAt(
    Warrior.abi,
    contractAddress
  );

  const fxRoot = await ethers.getContractAt(
    FXRootContractAbi,
    "0xF9bc4a80464E48369303196645e876c8C7D972de"
  );

  const supply = process.env.TOTAL_SUPPLY;

  for (let id = 0; id < supply; id++) {
    let approveTxn = await WarriorContract.approve(
      process.env.FXROOT_ADDRESS,
      "T" + id
    );
    await approveTxn.wait();
    console.log("NFT - " + "T" + id + " approved");
    let depositTxn = await fxRoot.deposit(
      contractAddress,
      process.env.WALLET_ADDRESS,
      T + "id",
      "0x6566"
    );
    await depositTxn.wait();
    console.log("NFT - " + "T" + id + " deposited");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
