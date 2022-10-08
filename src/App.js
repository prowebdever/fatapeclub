import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./Home";
import Navbar from "./components/Navbar";
import Terms from "./pages/terms";
import { createTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Web3 from "web3";
import FatApeContract from "./abis/FatApeClub.json";
import Aos from "aos";
import Loader from "./components/Loader";
import { fireConfetti } from "./components/confetti";
import Whitelisted from "./pages/whitelisted";
import HowToMint from "./pages/howToMint";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [metamask, setMetamask] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [startDate, setStartDate] = useState(new Date(1635814800 * 1000));

  const [isPaused, setIsPaused] = useState(null);
  const [isSoldOut, setIsSoldOut] = useState(null);
  const [isWhitelisted, setIsWhitelisted] = useState(null);
  const [exceedLimit, setExceedLimit] = useState(null);
  const [isPresale, setIsPresale] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [nftLimit, setnftLimit] = useState(null);
  const [numberOfToken, setNumberOfToken] = useState(null);
  const [currentMaxSupply, setCurrentMaxSupply] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [preSaleDate, setPreSaleDate] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  // const [startDate, setStartDate] = useState(new Date(2021, 9, 23, 21, 2, 0));
  // console.log("is presale: ", isPresale);
  // console.log("is public: ", isPublic);
  // console.log("is sold out: ", isSoldOut);
  // console.log("is exceedLimit: ", exceedLimit);
  // console.log("isWhitelisted: ", isWhitelisted);
  // console.log("is Paused: ", isPaused);
  // console.log("number of token", numberOfToken);
  // console.log("count", count);
  // console.log("Limit", nftLimit);
  // console.log("max supply: ", currentMaxSupply);
  // console.log("total supply: ", totalSupply);
  // console.log("startDate: ", startDate);
  // console.log("presale Date: ", preSaleDate);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    loadWeb3();
  }, []);

  useEffect(() => {
    if (contract != null && contract.methods != null && account != null) {
      getInfos();
    }
  }, [contract]);

  const getInfos = () => {
    // getListOfHolders();

    contract.methods
      .preSaleDate()
      .call()
      .then((presaleDate) => {
        setPreSaleDate(new Date(presaleDate * 1000));

        contract.methods
          .publicSaleDate()
          .call()
          .then((publicSaleDate) => {
            const now = Date.now();
            if (
              now > new Date(presaleDate * 1000) &&
              now < new Date(publicSaleDate * 1000)
            ) {
              setIsPresale(true);
              contract.methods
                .nftPerAddressLimitPresale()
                .call()
                .then((limit) => {
                  setnftLimit(parseInt(limit));
                  contract.methods
                    .walletOfOwner(account)
                    .call()
                    .then((tokens) => {
                      if (tokens.length >= limit) {
                        setExceedLimit(true);
                      }
                    });
                });

              contract.methods
                .preSaleMaxSupply()
                .call()
                .then((maxSupply) => {
                  setCurrentMaxSupply(parseInt(maxSupply));
                });
            } else if (now > publicSaleDate * 1000) {
              setIsPublic(true);
              setIsPresale(false);

              contract.methods
                .nftPerAddressLimit()
                .call()
                .then((limit) => {
                  setnftLimit(parseInt(limit));
                  contract.methods
                    .walletOfOwner(account)
                    .call()
                    .then((tokens) => {
                      setNumberOfToken(tokens.length);

                      if (tokens.length >= limit) {
                        setExceedLimit(true);
                      } else {
                        setExceedLimit(false);
                      }
                    });
                });

              contract.methods
                .maxSupply()
                .call()
                .then((maxSupply) => {
                  setCurrentMaxSupply(parseInt(maxSupply));
                });
            } else {
              setnftLimit(0);
            }
          });
      });

    contract.methods
      .paused()
      .call()
      .then((response) => {
        setIsPaused(response);
      });

    contract.methods
      .isWhitelisted(account)
      .call()
      .then((response) => {
        setIsWhitelisted(response);
      });

    contract.methods
      .maxSupply()
      .call()
      .then((maxSupply) => {
        // setTotalSold(totalSold);
        contract.methods
          .totalSupply()
          .call()
          .then((response) => {
            setTotalSupply(parseInt(response));
            if (parseInt(response) >= parseInt(maxSupply)) {
              setIsSoldOut(true);
            }
          });
      });
  };

  const getCost = async () => {
    const cost_per_mint = await contract.methods.getCurrentCost().call();
    return cost_per_mint;
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      //ALL GOOD
      window.web3 = new Web3(window.ethereum);
      setMetamask(true);

      window.web3.eth.getAccounts().then(async (addr) => {
        // Set User account into state
        if (addr.length > 0) {
          setIsWalletConnected(true);
        } else {
          setIsWalletConnected(false);
        }
      });
      loadBlockchainData();
    } else if (window.web3) {
      //display CONNECT WALLET
      window.web3 = new Web3(window.web3.currentProvider);

      setMetamask(true);
      // setIsWalletConnected(false);
      loadBlockchainData();
    } else {
      //METAMASK NOT INSTALLED
      setMetamask(false);
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = FatApeContract.networks[networkId];
    if (networkData) {
      const abi = FatApeContract.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      setContract(contract);
    } else {
      // window.alert("Smart contract not deployed to detected network.");
    }
  };

  if (window.web3) {
    window.ethereum.on("accountsChanged", function () {
      window.web3.eth.getAccounts().then((accounts) => {
        window.location.reload();

        // setAccount(accounts[0]);
        // setIsWalletConnected(true);
        // // loadWeb3();
        // getInfos();
      });
    });

    window.ethereum.on("networkChanged", function (networkId) {
      window.location.reload();
    });
  }

  // const mintApe = async () => {
  //   setAlertState({
  //     open: true,
  //     message: "Sale has not started yet",
  //     severity: "error",
  //   });
  // };

  const mintApe = async () => {
    await loadWeb3();

    // setIsSoldOut(true);
    // await getInfos();
    if (isPaused) {
      setAlertState({
        open: true,
        message: "The minting is on pause",
        severity: "error",
      });
    } else if (isPresale == false && isPublic == false) {
      setAlertState({
        open: true,
        message: "Presale has not started yet",
        severity: "error",
      });
    } else if (isPublic && count > 10) {
      setAlertState({
        open: true,
        message: "Can't mint more than 10 apes per transaction",
        severity: "error",
      });
    } else if (isPresale && count > 1) {
      setAlertState({
        open: true,
        message: "Can't mint more than 1 ape in presale",
        severity: "error",
      });
    } else if (isPresale && !isWhitelisted && !isPublic) {
      setAlertState({
        open: true,
        message: "You're not whitelisted, come back for the public sale",
        severity: "error",
      });
    } else if (exceedLimit) {
      setAlertState({
        open: true,
        message: "You've reached the limit of apes per wallet",
        severity: "error",
      });
    } else if (numberOfToken != null && numberOfToken + count > nftLimit) {
      setAlertState({
        open: true,
        message: "You've reached the limit of apes per wallet",
        severity: "error",
      });
    } else if (isSoldOut) {
      setAlertState({
        open: true,
        message: "The collection is sold out",
        severity: "error",
      });
    } else if (totalSupply + count > currentMaxSupply) {
      let msg = "";
      if (isPublic) {
        msg = "Not enough Apes left";
      } else {
        msg = "Presale supply sold out ";
      }
      setAlertState({
        open: true,
        message: msg,
        severity: "error",
      });
    } else {
      setIsMinting(true);

      const cost_per_mint = await getCost();
      const cost = count * cost_per_mint;

      contract.methods
        .mint(count)
        .send({ from: account, value: cost.toString() })
        .once("receipt", (receipt) => {
          setAlertState({
            open: true,
            message: "Congrat's! You're now a Fat Ape",
            severity: "success",
          });
          fireConfetti();
          getInfos();
          setIsMinting(false);
        })
        .catch((e) => {
          setIsMinting(false);
        });
    }
  };

  // function getListOfHolders() {
  //   let holders = [];

  //   contract.methods
  //     .totalSupply()
  //     .call()
  //     .then((totalSupply) => {
  //       for (let i = 1; i <= totalSupply; i++) {
  //         contract.methods
  //           .ownerOf(i)
  //           .call()
  //           .then((address) => {
  //             holders.push(address);
  //             console.log(holders);
  //           });
  //       }
  //     });
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loader />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              mintApe={mintApe}
              // startDate={startDate}
              startDate={startDate}
              isActive={isActive}
              setIsActive={setIsActive}
              setCount={setCount}
              count={count}
              isPaused={isPaused}
              isSoldOut={isSoldOut}
              isWhitelisted={isWhitelisted}
              exceedLimit={exceedLimit}
              isPresale={isPresale}
              isPublic={isPublic}
              alertState={alertState}
              setAlertState={setAlertState}
              isMinting={isMinting}
            />
          </Route>
          <Route exact path="/whitelisted">
            <Whitelisted
              metamask={metamask}
              isWalletConnected={isWalletConnected}
              isWhitelisted={isWhitelisted}
              alertState={alertState}
              setAlertState={setAlertState}
              account={account}
            />
          </Route>
          <Route exact path="/how-to-mint">
            <HowToMint />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
