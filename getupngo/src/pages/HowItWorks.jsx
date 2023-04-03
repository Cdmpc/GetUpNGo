import React from "react";
import TopNavBar from "../components/TopNavBar";
import StephAve from "../images/StephAve.jpg";
import { bgImg, imgOnTextStyle, h1ImgStyle, h3ImgStyle } from "./HomePage.jsx";
import Step1 from "../images/Step1.jpg";
import Step2 from "../images/Step2.jpg";
import Step3 from "../images/Step3.jpg";
import Step4 from "../images/Step4.jpg";

const stepsStyle = {
  width: "200px",
  height: "150px",
  marginLeft: "50px",
  marginRight: "50px",
};

const steps = [
  {
    key: 1,
    img: Step1,
    alt: "Credit Card Icon",
    title: "Purchase",
    description: "Purchase a membership or use a guest pass",
    link: "Purchase a pass or membership",
  },
  {
    key: 2,
    img: Step2,
    alt: "Bike dock station",
    title: "Pick Station",
    description:
      "Pick a station closest to your location and enter the passcode given after your purchase to unlock the bike",
  },
  {
    key: 3,
    img: Step3,
    alt: "Person riding bike icon",
    title: "Ride",
    description:
      "This is where the fun begins, once unlocked you can hop on and ride along!",
  },
  {
    key: 4,
    img: Step4,
    alt: "Bike returning to station icon",
    title: "Return",
    description:
      "When your time is up, return the bike at any station closest to you.",
  },
];

export default function HowItWorks() {
  return (
    <React.Fragment>
      <div className="nav-bar">
        <TopNavBar />
      </div>
      <section
        className="background-img"
        style={{ position: "relative", textAlign: "center" }}
      >
        <img
          src={StephAve}
          alt="Stephen Ave in Calgary"
          style={{ ...bgImg, height: "670px", filter: "brightness(40%)" }}
        />
        <div className="text-on-img" style={imgOnTextStyle}>
          <h1 style={h1ImgStyle}>
            Exhilaration is just a hop, skip and a pedal away
          </h1>
          <h3 style={h3ImgStyle}>
            You can pick up a bike at any rental station closest to your
            location in the city!
          </h3>
        </div>
      </section>
      <div className="outside-Steps">
        <h1 style={{ marginTop: "40px", fontFamily: "Gotham" }}>
          Renting a bike is as easy as 1, 2, 3, 4
        </h1>
        <div className="rentsteps" style={{ marginTop: "30px" }}>
          {steps.map((step) => (
            <figure
              key={step.key}
              className="steps"
              style={{
                verticalAlign: "top",
                display: "inline-block",
                textAlign: "center",
                width: "25%",
              }}
            >
              <img src={step.img} alt={step.alt} style={stepsStyle} />
              <figcaption
                className="captionTitle"
                style={{
                  display: "block",
                  fontFamily: "Gotham",
                  fontSize: "40px",
                  fontWeight: "500",
                }}
              >
                {step.title}
              </figcaption>
              <figcaption
                className="captionDesc"
                style={{
                  display: "block",
                  fontFamily: "Gotham Light",
                  marginTop: "12px",
                }}
              >
                {step.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
