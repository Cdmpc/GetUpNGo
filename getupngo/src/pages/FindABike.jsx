import React from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import BackgText from "../components/BgText";
import Brem from "../images/bremner.jpg";
import InteractiveMap from "../components/GoogleMap.jsx";

export default function FindABike() {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <TopNavBar />
      <div className="bgtext">
        <BackgText
          bgimg={Brem}
          bgalt="A streeview of Bremner Blvd, Toronto"
          includeButtons={false}
          TitleText="Find your set of wheels and feel the adrenaline"
          TitleSub="Use the interactive map below to view information about each station"
        />
      </div>
      <div className="interactive-map"></div>
    </React.Fragment>
  );
}
