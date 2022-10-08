import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import WhiterlistButton from "../components/whitelistedButton";
import Whitelist from "../assets/whitelist.json";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const Whitelisted = (props) => {
  const [whitelist, setWhitelist] = useState([]);

  useEffect(() => {
    setWhitelist(Whitelist.map(({ wallet }) => wallet));
  }, []);

  // VERIFY IF LIST IS VALID
  // useEffect(() => {
  //   let notOK = [];
  //   for (var i = 0; i < whitelist.length; i++) {
  //     let result = window.web3.utils.isAddress(whitelist[i]);

  //     var c = 0;
  //     var character = "";
  //     var isUpper = null;
  //     while (c <= whitelist[i].length) {
  //       character = whitelist[i].charAt(c);
  //       if (!isNaN(character * 1)) {
  //       } else {
  //         if (character == character.toUpperCase()) {
  //           isUpper = true;
  //         }
  //       }
  //       c++;
  //     }

  //     if (result == false || isUpper != true || whitelist[i].length != 42) {
  //       notOK.push(whitelist[i]);
  //     }

  //     console.log(notOK);
  //   }
  // }, [whitelist]);

  const isVerified = () => {
    if (whitelist.includes(props.account)) {
      props.setAlertState({
        open: true,
        message: "You're whitelisted!",
        severity: "success",
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whitelisted",
        wallet: props.account,
      });
    } else {
      props.setAlertState({
        open: true,
        message: "You're not whitelisted!",
        severity: "error",
      });
    }
  };

  return (
    <Container className="verify-container">
      <div>
        <h1>Whitelist</h1>
        <div className="account-container">
          {props.account ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>account:</h3>
              <p>
                {props.account.substring(0, 6)}...
                {props.account.substring(props.account.length - 4)}
              </p>
            </div>
          ) : null}

          <WhiterlistButton
            metamask={props.metamask}
            isWalletConnected={props.isWalletConnected}
            isWhitelisted={props.isWhitelisted}
            setAlertState={props.setAlertState}
            isVerified={isVerified}
          />
        </div>
      </div>
      <Snackbar
        open={props.alertState.open}
        autoHideDuration={6000}
        onClose={() =>
          props.setAlertState({ ...props.alertState, open: false })
        }
        className="alert"
      >
        <Alert
          onClose={() =>
            props.setAlertState({ ...props.alertState, open: false })
          }
          severity={props.alertState.severity}
          className="alert"
        >
          <h3 style={{ fontSize: "15px" }}>{props.alertState.message}</h3>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Whitelisted;
