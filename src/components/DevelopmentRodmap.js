import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";

function createData(title, desc) {
  return { title, desc };
}

const DevelopmentRoadmap = () => {
  return (
    <Container className="container">
      <div className="title-container">
        <h1 data-aos="fade-in">DEVELOPMENT ROADMAP</h1>
        <p style={{ textAlign: "center" }}>
          Our goal is to make sure your investment is highly profitable. To do
          so, we will implement several strategies after the launch in order to
          increase the floor price.
        </p>
      </div>
      <TableContainer style={{ overflow: "hidden" }}>
        <Table aria-label="simple table">
          <TableBody className="table-body">
            <TableRow className="table-row" data-aos="zoom-out-up">
              <TableCell scope="row" className="table-cell">
                <h3>MARKETING CAMPAIGNS</h3>
              </TableCell>
              <TableCell align="right" className="table-cell table-cell-desc">
                <p>
                  After investing over <b>$100,000</b> in marketing campaigns
                  for our launch sale, we will continue injecting money in
                  influencer marketing campaigns to keep the momentum going
                  around the Fat Ape Club. We want to make sure your Fat Apes
                  thrives through time, and we believe the best way to do this
                  is by planning multiple advertising campaigns, even after the
                  initial sale is over.
                </p>
              </TableCell>
            </TableRow>
            <TableRow className="table-row" data-aos="zoom-out-up">
              <TableCell scope="row" className="table-cell">
                <h3>WORLDWIDE EVENT</h3>
              </TableCell>
              <TableCell align="right" className="table-cell table-cell-desc">
                <p>
                  Once the mint is complete, all Fat Ape holders will be invited
                  to an <b>exclusive party</b> located in a prime travel
                  destination. Of course, this party will be complementary for
                  holders.
                </p>
              </TableCell>
            </TableRow>
            <TableRow className="table-row" data-aos="zoom-out-up">
              <TableCell scope="row" className="table-cell">
                <h3>DIAMOND HANDS</h3>
              </TableCell>
              <TableCell align="right" className="table-cell table-cell-desc">
                <p>
                  We will reward <b>Fat Ape holders</b> for helping the project
                  grow and the community thrive.
                </p>
              </TableCell>
            </TableRow>
            <TableRow className="table-row" data-aos="zoom-out-up">
              <TableCell scope="row" className="table-cell">
                <h3>BREEDING FUNCTIONS</h3>
              </TableCell>
              <TableCell align="right" className="table-cell table-cell-desc">
                <p>
                  Once the mint is complete, we will start developing Phase 2 of
                  the project, in which we will introduce breeding functions for
                  your Fat Apes.
                </p>
              </TableCell>
            </TableRow>
            <TableRow className="table-row" data-aos="zoom-out-up">
              <TableCell scope="row" className="table-cell">
                <h3>COMMUNITY EMPOWERMENT</h3>
              </TableCell>
              <TableCell align="right" className="table-cell table-cell-desc">
                <p>
                  The opinion of the Fat Ape holders is what matters to us the
                  most. Every week, we will hold polls in our Discord channel
                  for verified holders to voice their opinions on important
                  decisions regarding the future of the project.
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DevelopmentRoadmap;
