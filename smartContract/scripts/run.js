const main = async () => {
  const [owner] = await hre.ethers.getSigners();
  const feedBackContractFactory = await hre.ethers.getContractFactory(
    "MyFeedBack"
  );
  const feedBackContract = await feedBackContractFactory.deploy();
  await feedBackContract.deployed();

  console.log("Contract deployed to:", feedBackContract.address);
  console.log("   Contract deployed by:", owner.address);

  const feedBack1 = await feedBackContract.sendFeedBack("Mars Ifeanyi");
  feedBack1.wait();
  console.log("FeedBack is:", feedBack1);
  console.log("=====Getting FeedBack1=====");
  const myFeedBack1 = await feedBackContract.getFeedBack();

  console.log(myFeedBack1);

  const feedBack2 = await feedBackContract.sendFeedBack(
    "Web3-Blockchain Engineer"
  );
  feedBack2.wait();
  console.log("FeedBack is:", feedBack2);
  console.log("=====Getting FeedBack2=====");
  const myFeedBack2 = await feedBackContract.getFeedBack();

  console.log(myFeedBack2);

  const feedBack3 = await feedBackContract.sendFeedBack("Front-End Engineer");
  feedBack3.wait();
  console.log("FeedBack is:", feedBack3);
  console.log("=====Getting FeedBack3=====");
  const myFeedBack3 = await feedBackContract.getFeedBack();
  console.log(myFeedBack3);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating "Uncaught Fatal Exception"
  }
};

runMain();
