# Multisend NFT

This contract allows you to send many ERC-1155 NFTs in a single transaction. This is be useful for airdropping many NFTs in a gas-efficient manner.

This is intended for NFT contracts that support multiple copies of the same NFT, such as Rarible multiples, or Curio Cards.

Developed with Hardhat, compiled with solidity 0.8.4.

## How it works

The contract is very simple, see [contracts/Disperse.sol](contracts/Disperse.sol). The contract does some safety checking, then iterates over `token.safeBatchTransferFrom` for each `recipient`.

The function `disperse` takes 5 parameters:
- `IERC1155 token`: Address of an ERC-1155 NFT contract to send from.
- `address[] recipients`: Array of addresses of recipients.
- `uint256[] ids`: Array of NFT token IDs, if you are sending multiple different IDs to each recipient.
- `uint256[] values`: Array of quantities of each ID to send to each recipient.
- `bytes data`: Optional data passed along to safeBatchTransferFrom.

For example, if you wanted to send [this Rarible NFT](https://rinkeby.rarible.com/token/0x2ebecabbbe8a8c629b99ab23ed154d74cd5d4342:110285?tab=owners) to many people at once, you would provide the following:
- `IERC1155 token`: `0x2ebecabbbe8a8c629b99ab23ed154d74cd5d4342` (Rarible erc-1155 contract address)
- `address[] recipients`: `[0x5295b474F3A0bB39418456c96D6FCf13901A4aA1, 0x53D42b9A7C8d727c193eaE6E1465D808191E00B5]` (2 recipients)
- `uint256[] ids`: `[110285]` (token ID in contract - taken from URL)
- `uint256[] values`: `[3]` (3 copies of each ID to each recipient)
- `bytes data`: `0x`

## Developing

### Compile

    npx hardhat compile

### Run tests

    npx hardhat test

#### Develop and test interactively using fswatch

    fswatch test/test.js contracts/Disperse.sol | xargs -n1 -I{} npx hardhat test

## Deploy to testnet/mainnet

Adjust hardhat.config.js as necessary for rinkeby, mainnet etc, then run

    node scripts/deploy.js
