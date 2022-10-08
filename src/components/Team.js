import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import img from "../assets/team.png";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png";
import img4 from "../assets/team4.png";

export default function FAQ() {
  return (
    <Container className="container" id="team">
      <h1>Team</h1>
      <Grid container>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img className="team-img" src={img} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Keyboard</h3>
            <p>Senior Programmer</p>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img className="team-img" src={img2} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Chief</h3>
            <p>Marketing Genius</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img className="team-img" src={img3} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@DJ Fat Ape</h3>
            <p>Chief of Communications</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className="team-item-container">
          <img className="team-img" src={img4} alt="fatApe-Team" />
          <div className="team-desc">
            <h3>@Fat Ape Barista</h3>
            <p>Art Director</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
