import React from "react";
import TopNavBar from "../components/TopNavBar";
import BackgText, {
  bgImg,
  imgOnTextStyle,
  h1ImgStyle,
  h3ImgStyle,
} from "../components/BgText.jsx";
import bike1 from "../images/bike1.jpg";
import rider from "../images/rider.jpg";
import { stepsStyle } from "./HowItWorks.jsx";
import NPS from "../images/NPS.jpg";
import mainRed from "../App";
import { Button } from "primereact/button";

const passList = [
  {
    key: 1,
    passType: "Guest Pass",
    initialPrice: 15,
    hourlyRate: "$5/hr",
    passDescription: "A guest pass for the day, (max 4 hours per ride)",
    membershipCost: "",
    img: bike1,
    alt: "A bicycle docking station",
    linkText: "Purchase Guest Pass",
  },
  {
    key: 2,
    passType: "Go-getter GreenLight",
    initialPrice: 8,
    hourlyRate: "$2/hr",
    passDescription: "Go-Getters only, unlimited rides, (max 6 hours per ride)",
    membershipCost: "Membership Cost: $11/month",
    img: rider,
    alt: "Person riding a bike",
    linkText: "Become a Go-Getter",
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      <TopNavBar />
      <div className="bgtext">
        <BackgText
          bgimg={NPS}
          bgalt="Nathan Phillips Square at night"
          includeButtons={false}
          TitleText="Casual or enthusiast we got a plan for you"
          TitleSub="Choose from a guest pass or a membership pass if you're a Go-Getter which includes a sweet discount
        on every ride purchase and hourly rate"
        />
      </div>

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
      <div className="pass-render" style={{ marginTop: "30px" }}>
        {passList.map((pass) => (
          <figure
            key={pass.key}
            className="pass-items"
            style={{
              verticalAlign: "top",
              display: "inline-block",
              textAlign: "center",
              width:
                "600px" /* AS A RULE OF THUMB THIS WIDTH SHOULD BE AROUND DOUBLE THE HEIGHT */,
            }}
          >
            <img
              src={pass.img}
              alt={pass.alt}
              style={{
                ...stepsStyle,
                width: "500px",
                height: "300px",
                marginTop: "30px",
              }}
            />
            <figcaption
              className="pass-title"
              style={{
                marginTop: "20px",
                fontFamily: "Gotham",
                fontSize: "48px",
                color: "var(--green-500)",
              }}
            >
              {pass.passType}
            </figcaption>
            <h1 style={{ fontFamily: "Gotham", fontSize: "35px" }}>
              {"$" +
                pass.initialPrice +
                " initial rent fee + " +
                pass.hourlyRate}
            </h1>
            <figcaption
              className="pass-description"
              style={{
                fontSize: "20px",
                fontFamily: "Gotham",
              }}
            >
              {pass.passDescription}
            </figcaption>
            <Button
              className="p-button-help"
              label={pass.linkText}
              style={{
                color: "var(--teal-500)",
                fontFamily: "Gotham Light",
                textDecoration: "underline",
              }}
              link
            />
            <figcaption
              className="mem-rate mt-5"
              style={{
                fontSize: "20px",
                fontFamily: "Gotham",
                color: "var(--pink-400)",
              }}
            >
              {pass.membershipCost}
            </figcaption>
          </figure>
        ))}
      </div>
    </React.Fragment>
  );
}
