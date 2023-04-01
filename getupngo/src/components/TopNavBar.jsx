import React from "react";
import GGLogo from "../images/GGLogo.png";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

/** ITEMS AND LOGOS OF THE NAVBAR COMPONENT. */
const NavBarItems = [
  {
    label: "How It Works",
    icon: "pi pi-question-circle",
  },
  {
    label: "Pricing",
    icon: "pi pi-dollar",
    style: { color: "red" },
  },
  {
    label: "Find a bike",
    icon: "pi pi-search",
    style: { color: "white" },
  },
];

const TopNavBar = () => {
  return (
    <React.Fragment>
      <Menubar
        style={{
          padding: "15px",
          boxShadow: "1px 5px 12px #131326",
        }}
        model={NavBarItems}
        start={
          <Link to="/">
            <img
              src={GGLogo}
              alt="Bike and GetUp'N'Go Text underneath"
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
