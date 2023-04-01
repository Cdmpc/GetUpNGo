import React from "react";
import TopNavBar from "../components/TopNavBar";
import Toronto from "../images/Toronto.jpg";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="header-bar">
        <TopNavBar />
      </div>
      <div
        className="image-with-text"
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img
          src={Toronto}
          alt="Toronto Skyline at night"
          style={{
            width: "100%",
            height: "750px",
            filter: "brightness(60%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-90%, -90%)",
            color: "white",
            fontSize: "5rem",
            fontFamily: "Gotham Light",
          }}
        >
          Grab the city by the handlebars
        </h1>
      </div>
      <div></div>
    </React.Fragment>
  );
}
