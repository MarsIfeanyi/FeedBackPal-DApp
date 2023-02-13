import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";

import { contractABI, contractAddress } from "../constants/config";

const MyFeedBack = () => {
  const [feedback, setFeedback] = useState("");
  // const [address, setAddress] = useState("");
  // const [timestamp, setTimestamp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    // creating a signer
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const transaction = await contract.sendFeedBack(feedback);
    await transaction.wait();

    // Get the address of the person who sent the feedback
    // const currentAddress = await signer.getAddress();
    // setAddress(currentAddress);

    // Get the timestamp of the feedback
    // const block = await provider.getBlock(transaction.blockHash);
    // const blockTimestamp = block.timestamp;
    // setTimestamp(blockTimestamp);

    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-x-4 md:space-y-0 mx-auto items-center justify-center mt-24 ">
        <label htmlFor="feedback" className="text-blue-600">
          Give FeedBack
        </label>
        <input
          type="text"
          value={feedback}
          placeholder="Mars is a Blockchain Engineer"
          onChange={(e) => setFeedback(e.target.value)}
          className="rounded-lg p-2 border border-blue-600"
        />
        <button
          type="submit"
          className="bg-blue-600 rounded-lg p-2 text-white "
        >
          Submit Feedback
        </button>
      </div>
      {/* {address && <p>Address: {address}</p>}
      {timestamp && <p>Timestamp: {timestamp}</p>} */}
    </form>
  );
};

export default MyFeedBack;
