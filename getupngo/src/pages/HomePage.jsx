import React, { useEffect, useState } from "react";
import Toronto from "../images/Toronto.jpg";
import TopNavBar from "../components/TopNavBar";
import BackgText from "../components/BgText.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
  let nav = useNavigate();
  let isLoggedIn = window.localStorage.getItem("loginStat");

  useEffect(() => {
    nav("/");
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <React.Fragment>
        <div className="nav-bar">
          <TopNavBar />
        </div>
        <div className="bgimg">
          <BackgText
            bgimg={Toronto}
            bgalt="Toronto Skyline at night"
            includeButtons={true}
            TitleText="Grab Toronto by the handlebars"
            TitleSub="Immerse yourself in the noise of the Scotiabank Arena, the glow of the CN Tower to the neon of Nathan Phillips Square."
          />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="nav-bar">
          <TopNavBar />
        </div>
        <div className="bgimg">
          <BackgText
            bgimg={Toronto}
            bgalt="Toronto Skyline at night"
            includeButtons={false}
            TitleText="Grab Toronto by the handlebars"
            TitleSub="Immerse yourself in the noise of the Scotiabank Arena, the glow of the CN Tower to the neon of Nathan Phillips Square."
          />
        </div>
      </React.Fragment>
    );
  }
}
