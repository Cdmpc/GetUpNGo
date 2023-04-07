import React, { useState } from "react";
import Rider2 from "../images/rider2.jpg";
import GGLogo from "../images/GGLogo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { bgImg } from "../components/BgText";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <div className="flex align-items-center justify-content-center">
        <img
          src={Rider2}
          alt="A crosswalk"
          style={{ ...bgImg, position: "relative", alignItems: "center" }}
        />
        {/** This is the white box, everything underneath the div will be rendered inside of it. */}
        <div
          className="surface-card p-6 shadow-6 border-round-3xl lg:w-5 absolute"
          style={{ animation: "fadeinup 1.1s" }}
        >
          <div className="text-center mb-5">
            <Button
              icon="pi pi-arrow-left"
              severity="help"
              className="border-circle flex"
              onClick={() => nav(-1)}
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
            <div className="text-900 text-2xl font-medium mb-3">
              Welcome to the cool kids club, Go-Getter!
            </div>
            <span className="text-600 font-medium line-height-3">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            >
              Sign in!
            </Link>
          </div>
          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText
              id="email"
              type="text"
              placeholder="Email"
              className="w-full mb-3"
            />

            <label
              htmlFor="username"
              className="block text-900 font-medium mb-2"
            >
              Username
            </label>
            <InputText
              id="username"
              type="text"
              placeholder="Username"
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
              className="w-full mb-5"
            />

            <Button
              label="Sign Up"
              icon="pi pi-user-plus"
              className="w-5"
              rounded
              severity="danger"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
