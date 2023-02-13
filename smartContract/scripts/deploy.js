// imports
const { ethers, run, network } = require("hardhat");
const { verify } = require("../utils/verify");

// async main function
async function main() {
  const myFeedBackContractFactory = await ethers.getContractFactory(
    "MyFeedBack"
  );
  console.log("Deploying contract...");

  const myFeedBackContract = await myFeedBackContractFactory.deploy();
  await myFeedBackContract.deployed();
  console.log(`Contract deployed to: ${myFeedBackContract.address}`);

  // if we are on the goerli testnet and the ETHERSCAN_API_KEY exist, then wait for block confirmations and then verify contract
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");

    //wait for 6 block confirmations before verifying the transaction
    await myFeedBackContract.deployTransaction.wait(3);
    await verify(myFeedBackContract.address, []);
  }
}

// call main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
