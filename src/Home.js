import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Alert from "@material-ui/lab/Alert";
import Hero from "./components/Hero";

import FAQ from "./components/FAQ";
import Welcome from "./components/Welcome";
import Timeline from "./components/Roadmap";
import TimelineObserver from "react-timeline-animation";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import DevRoadmap from "./components/DevelopmentRodmap";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

// import { Typography, Button } from "@material-ui/core";
import "aos/dist/aos.css";

const Home = (props) => {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Hero
        metamask={props.metamask}
        isWalletConnected={props.isWalletConnected}
        mintApe={props.mintApe}
        startDate={props.startDate}
        isActive={props.isActive}
        setIsActive={props.setIsActive}
        setCount={props.setCount}
        count={props.count}
        isPaused={props.isPaused}
        isSoldOut={props.isSoldOut}
        isWhitelisted={props.isWhitelisted}
        exceedLimit={props.exceedLimit}
        isPresale={props.isPresale}
        isPublic={props.isPublic}
        alertState={props.alertState}
        setAlertState={props.setAlertState}
        isMinting={props.isMinting}
      />

      <Gallery />
      <Welcome />
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#58805a"
        handleObserve={(setObserver) => (
          <Timeline className="timeline" setObserver={setObserver} />
        )}
      />
      <DevRoadmap />
      <FAQ />
      <Team />
      <Footer />

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
    </main>
  );
};

export default Home;
