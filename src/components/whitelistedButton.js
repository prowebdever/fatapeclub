import { useState } from "react";
import { Button } from "@material-ui/core";

const WhitelistedButton = (props) => {
  // const [balance, setBalance] = useState();
  // const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          {!props.metamask ? (
            <div
              className="connect-button verify-button"
              onClick={() =>
                window.open(
                  "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                  "_blank"
                )
              }
            >
              Install Metamask
            </div>
          ) : !props.isWalletConnected ? (
            <div
              className="connect-button verify-button"
              onClick={() => window.ethereum.enable()}
            >
              Connect Wallet
            </div>
          ) : (
            <Button
              disabled={isSoldOut || isMinting}
              onClick={props.isVerified}
              variant="contained"
              className="connect-button mint-button verify-button"
            >
              VERIFY
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default WhitelistedButton;
