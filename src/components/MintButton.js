import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Button, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import IncrementDecrement from "./IncrementDecrement";

const Minter = (props) => {
  // const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  // const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  return (
    <>
      {!props.isSoldOut ? (
        <IncrementDecrement setCount={props.setCount} count={props.count} />
      ) : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          {!props.metamask ? (
            <div
              className="connect-button"
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
              className="connect-button"
              onClick={() => window.ethereum.enable()}
            >
              Connect Wallet
            </div>
          ) : (
            <Button
              disabled={props.isSoldOut || props.isMinting}
              onClick={props.mintApe}
              variant="contained"
              className="connect-button mint-button"
            >
              {props.isSoldOut ? (
                "SOLD OUT"
              ) : props.isMinting ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "MINT"
              )}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Minter;
