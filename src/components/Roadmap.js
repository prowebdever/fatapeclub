import { useEffect, useRef, useState } from "react";
import { fireConfetti } from "./confetti";
import Container from "@mui/material/Container";

const Timeline = ({ setObserver, callback }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const fireConfettiCallback = () => {
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, null);
    setObserver(circle2.current, null);
    setObserver(circle3.current, null);
    setObserver(circle4.current, null);
    setObserver(circle5.current, fireConfettiCallback);
  }, []);

  return (
    <Container
      className="container"
      data-aos="fade-in"
      style={{ paddingBottom: "10%" }}
      id="roadmap"
    >
      <h1>Roadmap</h1>

      <div className="wrapper">
        <div
          id="timeline1"
          ref={timeline1}
          className="timeline"
          data-aos="fade-up"
          style={{ height: "20px" }}
        />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle"></div>
          <div className="message">
            <h3>0% - Welcome to the Club! </h3>
            <p>
              Take a seat, join other fellow apes on Discord, and sip a glass of
              champagne. We will be raffling 5 Fat Apes once we reach 20,000
              members on Discord.
            </p>
          </div>
        </div>
        <div
          id="timeline2"
          ref={timeline2}
          className="timeline"
          data-aos="fade-up"
        />
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle"></div>
          <div className="message">
            <h3>25% - Entrée de Caviar</h3>
            <p>
              Fat Ape holders will be rewarded for thanking them of being part
              of the community. 10% of the second-market royalties will be
              dedicated to a special fund to ensure the Fat Ape Club’s longevity
              through marketing campaigns and floor sweeps.
            </p>
          </div>
        </div>
        <div
          id="timeline3"
          ref={timeline3}
          className="timeline"
          data-aos="fade-up"
        />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle"></div>
          <div className="message">
            <h3>50% - Drippy</h3>
            <p>
              Launch of the Fat Ape merch collection, with the option of having
              your Fat Ape NFT printed on the merch.
            </p>
          </div>
        </div>
      </div>
      <div
        id="timeline4"
        ref={timeline4}
        className="timeline"
        data-aos="fade-up"
      />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle"></div>
        <div className="message">
          <h3>75% - To the Moon!</h3>
          <p>
            A total of 10 Fat Apes, including one Heroic Ape, will be raffled
            among all the Fat Ape holders.
          </p>
        </div>
      </div>
      <div
        id="timeline5"
        ref={timeline5}
        className="timeline"
        data-aos="fade-up"
      />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle"></div>
        <div className="message">
          <h3>100% - Breeding</h3>
          <p>
            Our team will start implementing breeding functions in the upcoming
            weeks after the launch, which will allow Fat Apes holders to receive
            tokens and burn them to create new, stronger apes. In order to
            benefit from these breeding functions, you must own at least 2 Fat
            Apes.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Timeline;
