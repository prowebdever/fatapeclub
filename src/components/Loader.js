/* eslint-disable no-undef */
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Logo from "../assets/logo.png";

const Loader = () => {
  useEffect(() => {
    const tween3 = new TimelineMax();

    const loaderBackground = document.querySelectorAll(".loader");

    tween3
      .add(
        TweenMax.staggerTo(
          ".logo-letter",
          1,
          {
            opacity: 0,
            y: -40,
            delay: 1.25,
            stagger: {
              each: 0.02,
            },
            ease: Power1.easeInOut,
          },
          0.02
        )
      )
      .add(
        TweenMax.to(loaderBackground, 1, {
          y: "-100vh",
          height: 0,
          duration: 2,
          delay: 0,
        })
      );
  }, []);

  return (
    <Container className="container loader">
      <div data-aos="fade-in">
        <div>
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <div>
          <a className="logo-text-loader">
            <span className="logo-letter">F</span>
            <span className="logo-letter">A</span>
            <span className="logo-letter" style={{ marginRight: 10 }}>
              T
            </span>
            <span className="logo-letter">A</span>
            <span className="logo-letter">P</span>
            <span className="logo-letter" style={{ marginRight: 10 }}>
              E
            </span>
            <span className="logo-letter">C</span>
            <span className="logo-letter">L</span>
            <span className="logo-letter">U</span>
            <span className="logo-letter">B</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Loader;
