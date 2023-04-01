import React, { useRef, useState } from "react";
import GGLogo from "../images/GGLogo.png";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate, Link } from "react-router-dom";

/** ITEMS AND LOGOS OF THE NAVBAR COMPONENT. */
const NavBarItems = [
  {
    label: "How It Works",
    icon: "pi pi-question-circle",
  },
  { label: "Pricing", icon: "pi pi-dollar" },
  {
    label: "Find a bike",
    icon: "pi pi-search",
  },
];

const TopNavBar = () => {
  let nav = useNavigate();
  return (
    <React.Fragment>
      <Menubar
        style={{ padding: "15px" }}
        model={NavBarItems}
        start={
          <Link to="/">
            <img
              src={GGLogo}
              height={100}
              width={160}
              style={{ padding: "5px" }}
            />
          </Link>
        }
        end={
          <>
            <Button
              className="p-button-danger"
              label="Register"
              style={{ marginRight: "15px" }}
            />
            <Button
              label="Login"
              style={{ marginRight: "10px", backgroundColor: "#29b0ff" }}
            />
          </>
        }
      />
    </React.Fragment>
  );
};
export default TopNavBar;
