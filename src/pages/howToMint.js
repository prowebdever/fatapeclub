import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import WhiterlistButton from "../components/whitelistedButton";
import Whitelist from "../assets/whitelist.json";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Video from "../components/Video";
const Whitelisted = (props) => {
  const [whitelist, setWhitelist] = useState([]);
  // console.log(whitelist);

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
    console.log("isVerified");
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
        <h1>How to Mint</h1>
        <Video />
      </div>
    </Container>
  );
};

export default Whitelisted;
