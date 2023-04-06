import React from "react";
import Toronto from "../images/Toronto.jpg";
import TopNavBar from "../components/TopNavBar";
import BackgText from "../components/BgText.jsx";

export default function HomePage() {
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
}
