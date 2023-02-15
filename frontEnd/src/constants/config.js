export const contractAddress = "0xA654C8957465c293AE8a161D1488e22E68C40a88";

export const contractABI = [
  {
    inputs: [],
    name: "getFeedBack",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "feedback",
            type: "string",
          },
        ],
        internalType: "struct MyFeedBack.Feedback[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_userFeedback",
        type: "string",
      },
    ],
    name: "sendFeedBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userFeedback",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "feedback",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
