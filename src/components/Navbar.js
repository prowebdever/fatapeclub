import { useEffect, useState } from "react";
// import styled from "styled-components";
// import Countdown from "react-countdown";
// import { Button, CircularProgress, Snackbar } from "@material-ui/core";
// import Alert from "@material-ui/lab/Alert";

// import * as anchor from "@project-serum/anchor";

// import { LAMPORTS_PER_SOL } from "@solana/web3.js";

// import { useAnchorWallet } from "@solana/wallet-adapter-react";
// import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

// import {
//   CandyMachine,
//   awaitTransactionSignatureConfirmation,
//   getCandyMachineState,
//   mintOneToken,
//   shortenAddress,
// } from "../candy-machine";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Spin as Hamburger } from "hamburger-react";
import Discord from "../assets/discord.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.png";

// const ConnectButton = styled(WalletDialogButton)``;

// const CounterText = styled.span``; // add your styles here

// const MintContainer = styled.div``; // add your styles here

// const MintButton = styled(Button)``; // add your styles here

// export interface NavbarProps {
//   candyMachineId: anchor.web3.PublicKey;
//   config: anchor.web3.PublicKey;
//   connection: anchor.web3.Connection;
//   startDate: number;
//   treasury: anchor.web3.PublicKey;
//   txTimeout: number;
// }

const Navbar = (props) => {
  // const [balance, setBalance] = useState<number>();
  // const [isActive, setIsActive] = useState(false); // true when countdown completes
  // const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  // const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  // const [itemsAvailable, setItemsAvailable] = useState(0);
  // const [itemsRedeemed, setItemsRedeemed] = useState(0);
  // const [itemsRemaining, setItemsRemaining] = useState(0);
  const [menuToggle, setMenuToggle] = useState(false);

  // const [alertState, setAlertState] = useState<AlertState>({
  //   open: false,
  //   message: "",
  //   severity: undefined,
  // });

  // const [startDate, setStartDate] = useState(new Date(props.startDate));

  // const wallet = useAnchorWallet();
  // const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  // const refreshCandyMachineState = () => {
  //   (async () => {
  //     if (!wallet) return;

  //     const {
  //       candyMachine,
  //       goLiveDate,
  //       itemsAvailable,
  //       itemsRemaining,
  //       itemsRedeemed,
  //     } = await getCandyMachineState(
  //       wallet as anchor.Wallet,
  //       props.candyMachineId,
  //       props.connection
  //     );

  //     setItemsAvailable(itemsAvailable);
  //     setItemsRemaining(itemsRemaining);
  //     setItemsRedeemed(itemsRedeemed);

  //     setIsSoldOut(itemsRemaining === 0);
  //     setStartDate(goLiveDate);
  //     setCandyMachine(candyMachine);
  //   })();
  // };

  // const onMint = async () => {
  //   try {
  //     setIsMinting(true);
  //     if (wallet && candyMachine?.program) {
  //       const mintTxId = await mintOneToken(
  //         candyMachine,
  //         props.config,
  //         wallet.publicKey,
  //         props.treasury
  //       );

  //       const status = await awaitTransactionSignatureConfirmation(
  //         mintTxId,
  //         props.txTimeout,
  //         props.connection,
  //         "singleGossip",
  //         false
  //       );

  //       if (!status?.err) {
  //         setAlertState({
  //           open: true,
  //           message: "Congratulations! Mint succeeded!",
  //           severity: "success",
  //         });
  //       } else {
  //         setAlertState({
  //           open: true,
  //           message: "Mint failed! Please try again!",
  //           severity: "error",
  //         });
  //       }
  //     }
  //   } catch (error: any) {
  //     // TODO: blech:
  //     let message = error.msg || "Minting failed! Please try again!";
  //     if (!error.msg) {
  //       if (error.message.indexOf("0x138")) {
  //       } else if (error.message.indexOf("0x137")) {
  //         message = `SOLD OUT!`;
  //       } else if (error.message.indexOf("0x135")) {
  //         message = `Insufficient funds to mint. Please fund your wallet.`;
  //       }
  //     } else {
  //       if (error.code === 311) {
  //         message = `SOLD OUT!`;
  //         setIsSoldOut(true);
  //       } else if (error.code === 312) {
  //         message = `Minting period hasn't started yet.`;
  //       }
  //     }

  //     setAlertState({
  //       open: true,
  //       message,
  //       severity: "error",
  //     });
  //   } finally {
  //     if (wallet) {
  //       const balance = await props.connection.getBalance(wallet.publicKey);
  //       setBalance(balance / LAMPORTS_PER_SOL);
  //     }
  //     setIsMinting(false);
  //     refreshCandyMachineState();
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     if (wallet) {
  //       const balance = await props.connection.getBalance(wallet.publicKey);
  //       setBalance(balance / LAMPORTS_PER_SOL);
  //     }
  //   })();
  // }, [wallet, props.connection]);

  // useEffect(refreshCandyMachineState, [
  //   wallet,
  //   props.candyMachineId,
  //   props.connection,
  // ]);

  // const useStyles = makeStyles({
  //   paper: {
  //     background: "black",
  //   },
  // });

  // const classes = useStyles();

  const list = () => (
    <Box
      onClick={() => setMenuToggle(false)}
      onKeyDown={() => setMenuToggle(false)}
    >
      <List>
        <ListItem className="drawer-item">
          <h3>
            <a href="#about">About</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#roadmap">Roadmap</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#faq">FAQ</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a href="#team">Team</a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => window.location.replace("/whitelisted")}
            >
              whitelist
            </a>
          </h3>
        </ListItem>
        <ListItem className="drawer-item">
          <h3>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => window.location.replace("/how-to-mint")}
            >
              How to mint
            </a>
          </h3>
        </ListItem>
      </List>
      <Divider />
      <div className="footer-socials" style={{ marginTop: "30px" }}>
        <img
          src={Discord}
          onClick={() =>
            window.open("https://discord.com/invite/xxHJeysBvr", "_blank")
          }
        />
        <img
          src={Twitter}
          onClick={() =>
            window.open("https://twitter.com/fatapeclub", "_blank")
          }
        />
        <img
          src={Instagram}
          onClick={() =>
            window.open("https://www.instagram.com/fatapeclub/", "_blank")
          }
        />
      </div>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="navbar">
      <Drawer
        anchor="right"
        open={menuToggle}
        onClose={() => setMenuToggle(false)}
        PaperProps={{ className: "drawer" }}
      >
        {list()}
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "transparent" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => window.location.replace("/")}
              >
                <img src={Logo} className="logo" alt="logo" />
                <a className="logo-text">Fat Ape Club</a>
              </IconButton>
            </Typography>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
            {/* {wallet && (
              <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
            )}

            {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

            {wallet && <p>Total Available: {itemsAvailable}</p>}

            {wallet && <p>Redeemed: {itemsRedeemed}</p>}

            {wallet && <p>Remaining: {itemsRemaining}</p>} */}

            <div className="minter-navbar" style={{ marginRight: "50px" }}>
              <div
                className="connect-button discord-btn"
                onClick={() =>
                  window.open("https://discord.com/invite/xxHJeysBvr", "_blank")
                }
              >
                Join Discord
              </div>
              {/* {!wallet ? (
                <ConnectButton className="connect-button">
                  Connect Wallet
                </ConnectButton>
              ) : (
                <MintButton
                  className="connect-button"
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={onMint}
                  variant="contained"
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ? (
                    isMinting ? (
                      <CircularProgress />
                    ) : (
                      "MINT"
                    )
                  ) : (
                    <Countdown
                      date={startDate}
                      onMount={({ completed }) =>
                        completed && setIsActive(true)
                      }
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
              )} */}
            </div>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginLeft: 0 }}
            >
              {/* <MenuIcon onClick={() => setMenuToggle(!menuToggle)} /> */}
              <Hamburger
                toggled={menuToggle}
                onToggle={(toggled) => setMenuToggle(!menuToggle)}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar> */}
    </div>
  );
};

// interface AlertState {
//   open: boolean;
//   message: string;
//   severity: "success" | "info" | "warning" | "error" | undefined;
// }

// const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
//   return (
//     <CounterText>
//       {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
//     </CounterText>
//   );
// };

export default Navbar;
