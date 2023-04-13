import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Skyline from "../images/skyline.jpg";
import StripeContainer from "../components/StripeContainer";
import { bgImg } from "../components/BgText";

export default function Checkout() {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <TopNavBar />
      <div className="flex align-items-center justify-content-center">
        <img
          src={Skyline}
          style={{
            ...bgImg,
            position: "relative",
            alignItems: "center",
            height: "950px",
          }}
        />
        <StripeContainer />
      </div>
    </React.Fragment>
  );
}
