import { Container, Box } from "@mui/material/";
import image from "../assets/apeDefault.png";
// import background from "../assets/welcome-bg.png";

const Welcome = () => {
  return (
    <Container className="container" id="about" style={{ marginTop: 0 }}>
      <div>
        <Box
          data-aos="fade-up"
          // style={{ borderRadius: "75px", width: "100%" }}
          // mt={2}
          className="welcome-box"
          // style={{ backgroundImage: `url(${background})` }}
          // sx={{
          //   width: 300,
          //   height: 300,
          //   borderRadius: "75px",
          //   bgcolor: "primary.dark",
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
          // }}
        >
          <div className="welcome-img-container">
            <img src={image} className="welcome-img" />
          </div>
          <div className="welcome-content">
            <h2>Welcome!</h2>
            <p>
              Welcome to the Fat Ape Club, a tribe of 9,999 obese apes that
              partied too much and didn’t exercise enough.
            </p>
            <p>
              Years ago, the Fat Apes used to live together on a remote island
              in the Pacific Ocean. However, most of them were captured by
              poachers, who then sold the Fat Apes to multiple zoos around the
              world for profit. Last week, 10 Fat Apes escaped from those zoos
              after being held captive for more than 20 years. They are now on
              their way to free their colleagues, but their ultimate goal
              remains unclear…
            </p>
            <h2>Heroic Apes</h2>
            <p>
              The Heroic Apes are the 10 Fat Apes who escaped from their cages
              to free their colleagues. Each owner of those rare Heroic Apes
              NFTs will be rewarded with a <b>$10,000</b> bonus. Once the Fat
              Apes are sold out, the owner of the Lamborghini Heroic Ape will
              win a <b>2020 Lamborghini Huracán</b>.
            </p>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Welcome;
