### Project
Metacrafter Polygon advanced Module 1

### Installation and Execution
  1. First fork and clone my repo.
  2. Do **npm i**
  3. Add your environment variables in .env file.
  4. Run **npx hardhat compile**
  5. **npx hardhat run scripts/deploy.js ---network goerli** will deploy your ERC721A contract to goerli testnet.
  6. The deployed contract address will get written in contractAddress.js
  7. **npx hardhat run scripts/mintAll.js --network goerli** to mint all the nft
  8. **npx hardhat run scripts/approveAndDeposit.js --network goerli** to approve and deposit transaction on polygon via fxportal bridge
  9. Wait for 22 to 30 min for this to approve and deposit on polygon.
  10. **npx hardhat run scripts/promptDescription.js --network goerli** to get the prompt description and other information about the NFT.
  11. **npx hardhat run scripts/balanceOf.js --network mumbai** to get the balance of deployed tokens.
  12. Done

### Tools Used
  * ERC721A
  * solidity
  * hardhat
  * pinata

### Output
  ![image](https://github.com/Alok-Raturi/Metacrafter-Polygon-module-1/assets/110283609/343a9b1c-68b2-4e56-9bf9-978ff44946f1)



  
  ![image](https://github.com/Alok-Raturi/Metacrafter-Polygon-module-1/assets/110283609/fac71d7b-577a-4a10-9abb-caf5112ed92c)


### [Polyscan link](https://mumbai.polygonscan.com/address/0xae61aa827e27f8ab79c5d73d0b5958f8b5779876#tokentxnsErc721)
### [Etherscan link](https://goerli.etherscan.io/address/0xAE61aa827E27f8aB79c5D73d0b5958f8B5779876)




