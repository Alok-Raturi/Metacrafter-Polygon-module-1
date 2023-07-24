const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const Contract = await hre.ethers.deployContract("Warrior");
  await Contract.waitForDeployment();

  console.log("Contract Address : ", await Contract.getAddress());

  const contractAddressContent = `const contractAddress = "${await Contract.getAddress()}"; \nmodule.exports= {contractAddress};`;
  const filePath = path.join(__dirname, "contractAddress.js");
  fs.writeFileSync(filePath, contractAddressContent);
  console.log("\nContract address written to:", filePath);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
