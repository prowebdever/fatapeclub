import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.png";
import Discord from "../assets/discord.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <Container className="footer-container">
      <Box className="footer-box">
        <img src={Logo} />
        <div>
          <a className="logo-text-footer">Fat Ape Club</a>
        </div>
        <p>All Rights Reserved 2021</p>
        <p>
          <a
            className="terms-btn"
            onClick={() => window.location.replace("/terms")}
          >
            Terms and conditions
          </a>
        </p>
        <p>
          <a
            className="contract-btn"
            onClick={() =>
              window.open(
                "https://etherscan.io/address/0xF3114DD5c5b50a573E66596563D15A630ED359b4#code",
                "_blank"
              )
            }
          >
            0xF3114DD5c5b50a573E66596563D15A630ED359b4
          </a>
        </p>
        <div className="footer-socials">
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
      </Box>
    </Container>
  );
}
