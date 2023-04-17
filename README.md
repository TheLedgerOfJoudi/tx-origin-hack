# tx.origin attack

This example shows how to simulate tx.origin attacks in Solidity smart contracts.

## How to use

Fill in hardhat.config.js with the following:
 - Two Ethereum private keys. The first to play victim and the second to play attacker.
 - A web3 provider API key, I used https://www.alchemy.com/ for deployment on goerli.

In hardhat-setup, build contracts with ``` npx hardhat compile ```. You can, then, deploy contracts by hitting ``` npx hardhat run deploy.js --network goerli``` or watch a simulation of the hack with ``` npx hardhat run hack.js --network goerli ``` in the scripts directory. 

Frontend-wise, copy the Attack contract address (run deploy.js) and its ABI (from hardhat artifacts) to config/config.js. Run ``` npm run dev ``` and click the button as a victim (make sure that your wallet address when clicking corresponds to the first private key in hardhat's config).

A history of hacks: https://goerli.etherscan.io/address/0x1a977F0ea4235CDc8dbB177D7e4C674D96aaFD1c
