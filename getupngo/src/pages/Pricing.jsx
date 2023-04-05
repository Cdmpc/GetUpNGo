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
  },
  {
    key: 2,
    passType: "Membership Pass",
    initialPrice: 10,
    hourlyRate: "$2/hr",
    passDescription: "Members only, unlimited rides, (max 6 hours per ride)",
    membershipCost: "$8/month",
    img: rider,
    alt: "Person riding a bike",
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
          TitleText="Casual or enthusiaist we got a plan for you"
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
      <div className="pass-render" style={{ marginTop: "100px" }}>
        {passList.map((pass) => (
          <figure
            key={pass.key}
            className="pass-items"
            style={{
              verticalAlign: "top",
              display: "inline-block",
              textAlign: "center",
              width: "50%",
            }}
          >
            <img
              src={pass.img}
              alt={pass.alt}
              style={{ ...stepsStyle, width: "500px", height: "300px" }}
            />
            <figcaption
              className="pass-title"
              style={{
                display: "block",
                fontFamily: "Gotham",
                fontSize: "40px",
              }}
            >
              {pass.passType}
            </figcaption>
            <figcaption
              className="pass-description"
              style={{
                display: "block",
                fontSize: "20px",
                fontFamily: "Gotham",
              }}
            >
              {pass.passDescription}
            </figcaption>
          </figure>
        ))}
      </div>
    </React.Fragment>
  );
}
