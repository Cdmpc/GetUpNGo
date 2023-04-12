import React, { useEffect, useRef, useState } from "react";
import CrossWalk from "../images/crosswalk.jpg";
import GGLogo from "../images/GGLogo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { bgImg } from "../components/BgText";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Toast } from "primereact/toast";
import HomePage from "./HomePage";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const toast = useRef(null);

  const showToast = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 1000,
    });
  };

  let nav = useNavigate();

  Axios.defaults.withCredentials = true;
  const doLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/login", {
      Username: username,
      Pass: password,
    }).then((response) => {
      if (response.data.message) {
        /** Login FAILED! */
        window.localStorage.setItem("loginStat", false);
        showToast("Login failed!");
      } else {
        /** Login credentials match */
        window.localStorage.setItem("loginStat", true);
        nav("/");
      }
    });
  };

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
            <label
              htmlFor="username"
              className="block text-900 font-medium mb-2"
            >
              Username
            </label>
            <InputText
              id="email"
              type="text"
              placeholder="Username"
              className="w-full mb-3"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              label="Sign In"
              icon="pi pi-user"
              className="w-5"
              rounded
              onClick={(e) => {
                doLogin(e);
              }}
            />
            <Toast ref={toast} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
