const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

const { expect } = require("chai");
const { toHex } = require("web3-utils");

describe("MyFeedback contract", function () {
  let contract;

  beforeEach(async function () {
    contract = await ethers.getContractFactory("MyFeedBack");
    contract = await contract.deploy();
    await contract.deployed();
  });

  it("Should add a feedback to the userFeedback array", async function () {
    await contract.sendFeedBack("This is a great contract!");
    const feedbacks = await contract.getFeedBack();
    expect(feedbacks[0].feedback).to.equal("This is a great contract!");
    expect(feedbacks[0].sender).to.equal(
      await ethers.provider.getSigner().getAddress()
    );
  });
});
