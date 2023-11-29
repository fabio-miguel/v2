import React, { useEffect, useState } from "react";
import { useColor } from "./ColorContext";
import PosterLogo from "../images/hero/Poster-Logo.png";

const Hero = () => {
  const { setNewColor, backgroundColor } = useColor();
  const [isPaused, setIsPaused] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      const colorArray = [
        "#ff5507",
        "#ffc532",
        "#ffb189",
        "#ffffff",
        "#70736c",
        "#97b081",
      ];

      intervalId = setInterval(() => {
        const nextColor = colorArray[colorIndex];
        setNewColor(nextColor);
        setColorIndex((prevIndex) => (prevIndex + 1) % colorArray.length);
      }, 800);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, colorIndex, setNewColor]);

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <section
        id="hero"
        className="hero"
        style={{ background: backgroundColor }}
      >
        <div className="container">
          <div className="hero-content">
            <button onClick={handlePauseClick}>
              <i class="fa-regular fa-circle-pause"></i>
            </button>
            <div className="hero-poster">
              <div className="gr-desc">
                <div className="gr"></div>
                <div className="gr"></div>
                <div className="gr">
                  <h3>
                    Fabio Miguel is a Creative Web Developer offering <br />
                    Frontend & Ecommerce Solutions
                  </h3>
                </div>
                <div className="gr"></div>
              </div>
              <div className="poster-img">
                <img src={PosterLogo} alt="" />
              </div>
              <div className="hero-bottom">
                <div className="hero-bottom-left">
                  Specialisms in creative Frontend UI/UX <br />
                  experiences for the web & Elevated Shopify storefront builds{" "}
                  <br />
                  with bespoke editing environments for businesses.
                  <br />
                  <br />
                  &copy; 2023
                </div>
                <div className="hero-bottom-right">
                  Static & Headless Websites <br />
                  Shopify & Sanity <br />
                  <br />
                  Frontend & Backend Development <br />
                  Technical Consulting
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};
export default Hero;
