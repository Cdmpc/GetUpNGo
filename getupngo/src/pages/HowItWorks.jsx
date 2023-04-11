import React from "react";
import TopNavBar from "../components/TopNavBar";
import Eaton from "../images/eaton.jpg";
import BackgText from "../components/BgText";
import Step1 from "../images/Step1.jpg";
import Step2 from "../images/Step2.jpg";
import Step3 from "../images/Step3.jpg";
import Step4 from "../images/Step4.jpg";
import axios from "axios";

const stepsStyle = {
  width: "200px",
  height: "150px",
  marginLeft: "50px",
  marginRight: "50px",
};
export { stepsStyle };

const steps = [
  {
    key: 1,
    img: Step1,
    alt: "Credit Card Icon",
    title: "Purchase",
    description: "Purchase a membership or use a guest pass",
    linkText: "See prices",
    linkTo: "/pricing",
  },
  {
    key: 2,
    img: Step2,
    alt: "Bike dock station",
    title: "Pick Station",
    description:
      "Pick a station closest to your location and enter the passcode given after your purchase to unlock the bike",
    linkText: "See available stations",
    linkTo: "/stations",
  },
  {
    key: 3,
    img: Step3,
    alt: "Person riding bike icon",
    title: "Ride",
    description:
      "This is where the fun begins, once unlocked you can hop on and ride along!",
    linkText: "View popular trails",
    linkTo: "/trails",
  },
  {
    key: 4,
    img: Step4,
    alt: "Bike returning to station icon",
    title: "Return",
    description:
      "When your time is up, return the bike at any station closest to you.",
    linkText: "See prices",
    linkTo: "/pricing",
  },
];

export default function HowItWorks(props) {
  return (
    <React.Fragment>
      <div className="nav-bar">
        <TopNavBar />
      </div>
      <div className="bgtext">
        <BackgText
          bgimg={Eaton}
          bgalt="Eaton Centre from Toronto"
          includeButtons={false}
          TitleText="Exhilaration is only a hop skip and pedal away"
          TitleSub="Feel the wind in your hair as you pedal and soak in the lights. All you need is a helmet and the will to ride!"
        />
      </div>
      <h1 style={{ marginTop: "40px", fontFamily: "Gotham" }}>
        Renting a bike is as easy as 1, 2, 3 (and 4)!
      </h1>
      <div className="rent-steps" style={{ marginTop: "30px" }}>
        {steps.map((step) => (
          <figure
            key={step.key}
            className="steps"
            /** THIS CENTERS TEXT UNDER THE IMAGE AND MAKES IT WRAP IF THE WINDOW SIZE DECREASES */
            style={{
              verticalAlign: "top",
              display: "inline-block",
              width: "300px",
            }}
          >
            <img src={step.img} alt={step.alt} style={stepsStyle} />
            <figcaption
              className="captionTitle"
              style={{
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
                fontFamily: "Gotham Light",
              }}
            >
              {step.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </React.Fragment>
  );
}
