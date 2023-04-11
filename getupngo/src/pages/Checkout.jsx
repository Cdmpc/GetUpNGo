import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import { StyleClass } from "primereact/styleclass";
import BackgText from "../components/BgText";
import Skyline from "../images/skyline.jpg";

export default function Checkout() {
  return (
    <React.Fragment>
      <TopNavBar />
      <div className="BackgroundImage">
        <img src={Skyline} style={{ width: "100%", height: "750px" }} />
      </div>
    </React.Fragment>
  );
}
