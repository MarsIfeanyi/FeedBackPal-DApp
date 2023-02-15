import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";

import { contractABI, contractAddress } from "../constants/config";

const GetMyFeedBack = () => {
  const [feedback, setFeedback] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const getFeedBackHandler = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    // creating a signer
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const feedbacks = await contract.getFeedBack();

    setFeedback(feedbacks);
  };

  useEffect(() => {
    getFeedBackHandler();
  }, [feedback]);

  const showFeedbackHandler = () => {
    setShowFeedback(true);
  };

  const closeFeedbackHandler = () => {
    setShowFeedback(false);
  };

  return (
    <div>
      <h3 className="items-center justify-center mx-auto flex mt-10 mb-10 text-2xl text-blue-600 ">
        User Feedbacks
      </h3>

      {feedback.map((feedbackItem, index) => (
        <div key={index} className="flex items-center justify-center mb-4 ">
          {showFeedback
            ? `Sender: ${feedbackItem.sender}` +
              ";\n" +
              " " +
              " " +
              ` FeedBack: ${feedbackItem.feedback}` +
              ""
            : // " (" +
              // `Time: ${feedbackItem.timestamp}` +
              // ")"
              ""}
        </div>
      ))}

      <div className=" flex flex-col md:flex-row space-y-6 space-x-0 mx-auto items-center md: justify-center md:space-y-0 md:space-x-6 mt-10">
        <button
          onClick={showFeedbackHandler}
          className="rounded-lg bg-blue-500 p-2 text-white"
        >
          Get feedback
        </button>

        <button
          onClick={closeFeedbackHandler}
          className="rounded-lg bg-blue-900 p-2 text-white "
        >
          {" "}
          Close feedback
        </button>
      </div>
    </div>
  );
};

export default GetMyFeedBack;
