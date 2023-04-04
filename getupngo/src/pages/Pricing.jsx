import React from "react";
import TopNavBar from "../components/TopNavBar";
import {
  bgImg,
  imgOnTextStyle,
  h1ImgStyle,
  h3ImgStyle,
} from "../components/BgText.jsx";
import bike1 from "../images/bike1.jpg";
import { stepsStyle } from "./HowItWorks.jsx";

const passList = [
  {
    key: 1,
    passType: "Guest Pass",
    initialPrice: 15,
    hourlyRate: "$5/hr",
    passDescr: "A guest pass for the day, (max 4 hours per ride)",
    membershipCost: "",
    img: bike1,
    alt: "Man riding a bike in the city",
  },
  {
    key: 2,
    passType: "Membership Pass",
    initialPrice: 10,
    hourlyRate: "$2/hr",
    passDescr: "Members only, unlimited rides, (max 6 hours per ride)",
    membershipCost: "$8/month",
    img: bike1,
    alt: "Person riding a bike",
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      <TopNavBar />

      <div className="choose-plan" style={{ marginTop: "50px" }}>
        <h1
          className="title-plan"
          style={{
            ...h1ImgStyle,
            fontFamily: "Gotham",
            color: "#ff293e",
          }}
        >
          Choose your plan
        </h1>
      </div>
      <div className="pass-render" style={{ marginTop: "100px" }}>
        {passList.map((pass) => (
          <figure
            key={pass.key}
            className="pass-items"
            style={{
              verticalAlign: "top",
              display: "inline-block",
              textAlign: "center",
              width: "23%",
            }}
          >
            <img
              src={pass.img}
              alt={pass.alt}
              style={{ ...stepsStyle, width: "200px", height: "200px" }}
            />
          </figure>
        ))}
      </div>
    </React.Fragment>
  );
}
