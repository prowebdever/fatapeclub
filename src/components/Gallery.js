/* eslint-disable no-undef */
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import img from "../assets/fatApe.jpg";
import img2 from "../assets/fatApe2.jpg";
import img3 from "../assets/fatApe3.jpg";
import img4 from "../assets/fatApe4.jpg";
import img5 from "../assets/fatApe5.jpg";
import img6 from "../assets/fatApe6.jpg";
import img7 from "../assets/fatApe7.jpg";
import img8 from "../assets/fatApe8.jpg";
import img9 from "../assets/fatApe9.jpg";
import img10 from "../assets/fatApe10.jpg";
import img11 from "../assets/fatApe11.jpg";
import img12 from "../assets/fatApe12.jpg";
import img13 from "../assets/fatApe13.jpg";
import img14 from "../assets/fatApe14.jpg";
import img15 from "../assets/fatApe15.jpg";
import img16 from "../assets/fatApe16.jpg";
import img17 from "../assets/fatApe17.jpg";
import img18 from "../assets/fatApe18.jpg";

const path = {
  curviness: 0,
  autoRotate: false,
  values: [{ x: (window.innerWidth / 100) * 80, y: 0 }],
};

const path2 = {
  curviness: 0,
  autoRotate: false,
  values: [{ x: (-window.innerWidth / 100) * 80, y: 0 }],
};

export default function Gallery() {
  useEffect(() => {
    const tween = new TimelineLite();
    const tween2 = new TimelineLite();
    tween.add(
      TweenLite.to("#gallery-row1", 1, {
        bezier: path,
        ease: Power1.easeInOut,
      })
    );
    tween2.add(
      TweenLite.to("#gallery-row2", 1, {
        bezier: path2,
        ease: Power1.easeInOut,
      })
    );
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#gallery",
      duration: 1500,
      triggerHook: 1,
    })
      .setTween(tween)
      // .addIndicators()
      .addTo(controller);

    const controller2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#gallery",
      duration: 1500,
      triggerHook: 1,
    })
      .setTween(tween2)
      // .addIndicators()
      .addTo(controller2);
  }, []);

  return (
    <Container
      id="gallery"
      className="container"
      style={{ transform: "translateY(-25%) rotate(-7deg)", marginBottom: 0 }}
    >
      <Box className="box">
        <div className="gallery-translate">
          <div
            className="gallery-container"
            id="gallery-row1"
            // data-aos="gallery-animation"
          >
            <img className="gallery-img" src={img} />
            <img className="gallery-img" src={img2} />
            <img className="gallery-img" src={img3} />
            <img className="gallery-img" src={img4} />
            <img className="gallery-img" src={img5} />
            <img className="gallery-img" src={img6} />
            <img className="gallery-img" src={img7} />
            <img className="gallery-img" src={img8} />
            <img className="gallery-img" src={img9} />
          </div>
        </div>

        <div>
          <div
            className="gallery-container"
            id="gallery-row2"
            // data-aos="gallery-animation"
          >
            <img className="gallery-img" src={img10} />
            <img className="gallery-img" src={img11} />
            <img className="gallery-img" src={img12} />
            <img className="gallery-img" src={img13} />
            <img className="gallery-img" src={img14} />
            <img className="gallery-img" src={img15} />
            <img className="gallery-img" src={img16} />
            <img className="gallery-img" src={img17} />
            <img className="gallery-img" src={img18} />
          </div>
        </div>
      </Box>
    </Container>
  );
}
