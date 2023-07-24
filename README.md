### Project
Metacrafter Polygon advanced Module 1

### Installation and Execution
  1. First fork and clone my repo.
  2. Do **npm i**
  3. Add your environment variables in .env file.
  4. Run ** npx hardhat compile **
  5. ** npx hardhat run scripts/deploy.js ---network goerli ** will deploy your ERC721A contract to goerli testnet.
  6. The deployed contract address will get written in contractAddress.js
  7. ** npx hardhat run scripts/mintAll.js --network goerli ** to mint all the nft
  8. ** npx hardhat run scripts/approveAndDeposit.js --network goerli ** to approve and deposit transaction on polygon via fxportal bridge
  9. Wait for 22 to 30 min for this to approve and deposit on polygon.
  10. ** npx hardhat run scripts/promptDescription.js --network goerli ** to get the prompt description and other information about the NFT.
  11. ** npx hardhat run scripts/balanceOf.js --network mumbai ** to get the balance of deployed tokens.
  12. Done

### Tools Used
  * ERC721A
  * solidity
  * hardhat
  * pinata

### Output
  

