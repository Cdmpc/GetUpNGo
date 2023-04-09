import React, { useState } from "react";
import CrossWalk from "../images/crosswalk.jpg";
import GGLogo from "../images/GGLogo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { bgImg } from "../components/BgText";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <div className="flex align-items-center justify-content-center">
        <img
          src={CrossWalk}
          alt="A crosswalk"
          style={{ ...bgImg, position: "relative", alignItems: "center" }}
        />
        {/** This is the white box */}
        <div
          className="surface-card p-6 shadow-6 border-round-3xl lg:w-5 absolute"
          style={{ animation: "fadeinup 1.1s" }}
        >
          <div className="text-center mb-5">
            <Button
              icon="pi pi-arrow-left"
              severity="help"
              className="border-circle flex"
              onClick={() => nav("/")}
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
            <div className="text-900 text-3xl font-medium mb-3">
              Good to see you again, Go-Getter!
            </div>
            <span className="text-600 font-medium line-height-3">
              Don't have an account?
            </span>
            <Link
              to="/signup"
              className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            >
              Create one!
            </Link>
          </div>
          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText
              id="email"
              type="text"
              placeholder="Email address"
              className="w-full mb-3"
            />

            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Password
            </label>
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mb-7"
            />

            <Button label="Sign In" icon="pi pi-user" className="w-5" rounded />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
