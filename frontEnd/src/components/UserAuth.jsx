import { useEffect, useState } from "react";

const getEthereumObject = () => window.ethereum;

const UserAuth = () => {
  const [currentAccount, setCurrentAccount] = useState();
  const [connectMessage, setConnectMessage] = useState();

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length !== 0) {
        const account = accounts[0];

        const truncatedAccount = `${account.substr(0, 6)}...${account.substr(
          -4
        )}`;

        setCurrentAccount(truncatedAccount.toString());
        return account;
      } else {
        setConnectMessage("No account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletHandler = () => {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      setConnectMessage("Please Install Metamask");
      return;
    }

    // Only connect if the user has clicked the button
    if (currentAccount === undefined) {
      connectWallet();
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const connected = "Connected✅";

  return (
    <div>
      <h3> {connectMessage}</h3>

      {currentAccount ? (
        <div
          className="mt-2 mr-8 text-2xl
        "
        >
          <h5>
            {currentAccount} {connected}
          </h5>
          {/* <h5>Wallet Connected</h5> */}
        </div>
      ) : (
        <button
          onClick={connectWalletHandler}
          className="bg-blue-600 rounded-xl text-white  py-2 px-3 mt-4 mr-12 text-xl"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default UserAuth;
