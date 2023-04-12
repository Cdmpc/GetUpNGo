import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import { StyleClass } from "primereact/styleclass";
import BackgText from "../components/BgText";
import Skyline from "../images/skyline.jpg";
import GGLogo from "../images/GGLogo.png";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Checkout() {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <TopNavBar />
      <div className="flex align-items-center justify-content-center">
        <img
          src={Skyline}
          style={{ width: "100%", position: "relative", alignItems: "center" }}
        />
        <div
          className="surface-card p-6 shadow-6 border-round-3xl lg:w-6 absolute"
          style={{ animation: "fadeinup 1.1s" }}
        >
          <div className="text-center mb-5">
            <Button
              icon="pi pi-arrow-left"
              severity="help"
              className="border-circle flex"
              onClick={() => nav("/findabike")}
            />
            <Link to="/">
              <img
                src={GGLogo}
                alt="GetUpNGo bike logo"
                height={100}
                className="mb-1"
                style={{ transform: "translateY(-30%)" }}
              />
            </Link>
            <div
              className="text-900 text-2xl font-medium mb-3"
              style={{ fontFamily: "Gotham Light" }}
            >
              Insert your payment info here to rent the bike!
            </div>
            <div>
              <label
                htmlFor="Card Number"
                className="block text-900 font-medium mb-2"
              >
                Card Number
              </label>
              <InputText
                keyfilter="int"
                placeholder="Card Number"
                className="w-full mb-3"
                onChange={(e) => {}}
              />

              <label
                htmlFor="password"
                className="block text-900 font-medium mb-2"
              >
                Card Holder Name
              </label>
              <InputText
                className="w-full mb-7"
                placeholder="Card Holder Name"
                onChange={(e) => {}}
              />
              <Button
                label="Sign In"
                icon="pi pi-user"
                className="w-5"
                rounded
                onClick={(e) => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
