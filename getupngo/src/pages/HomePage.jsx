import React from "react";
import Toronto from "../images/Toronto.jpg";
import { Button } from "primereact/button";
import TopNavBar from "../components/TopNavBar";
import BgText from "../components/BgText.jsx";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="nav-bar">
        <TopNavBar />
      </div>
      <BgText />
      {/** REGISTER AND GUEST BUTTONS */}
      <div
        className="Reg-Guest-btns"
        style={{ transform: "translate(-2%, 0%)" }}
      >
        <Button
          className="p-button-help"
          label="Become a Go-Getter"
          style={{
            fontFamily: "Gotham Light",
            fontSize: "1.2rem",
            transform: "translate(-15%, 30px)",
            borderRadius: "50px",
            width: "250px",
            animation: "fadein 2.5s",
          }}
        />
        <Button
          className="p-button-success"
          label="Continue as Guest"
          style={{
            fontFamily: "Gotham Light",
            fontSize: "1.2rem",
            transform: "translate(15%, 30px)",
            borderRadius: "50px",
            width: "220px",
            animation: "fadein 2.5s",
          }}
        />
      </div>
    </React.Fragment>
  );
}
