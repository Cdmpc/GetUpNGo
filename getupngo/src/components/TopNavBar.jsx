import React from "react";
import GGLogo from "../images/GGLogo.png";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

/** ITEMS AND LOGOS OF THE NAVBAR COMPONENT. */
/** PROPERTIES OF MENUBARITEMS:  https://primereact.org/menubar/*/
const NavBarItems = [
  {
    label: "How It Works",
    icon: "pi pi-question",
    style: { fontFamily: "Gotham Light", fontSize: "20px" },
    url: "/howitworks",
  },
  {
    label: "Pricing",
    icon: "pi pi-dollar",
    style: { fontFamily: "Gotham Light", fontSize: "20px" },
    url: "/pricing",
  },
  {
    label: "Find a bike",
    icon: "pi pi-search",
    style: { fontFamily: "Gotham Light", fontSize: "20px" },
  },
];

const TopNavBar = () => {
  return (
    <React.Fragment>
      <Menubar
        style={{
          padding: "15px",
          width: "100%",
          borderRadius: "0%",
        }}
        model={NavBarItems}
        start={
          <Link to="/">
            <img
              src={GGLogo}
              alt="Bike and GetUp'N'Go Text underneath"
              height={120}
              width={190}
              style={{ padding: "5px", marginLeft: "25px" }}
            />
          </Link>
        }
        end={
          <React.Fragment>
            <Button
              className="p-button-danger"
              label="Become a Go-Getter"
              style={{
                marginRight: "15px",
                borderRadius: "50px",
                fontFamily: "Gotham Light",
              }}
            />
            <Button
              className="p-button-primary"
              label="Log In"
              style={{
                marginRight: "10px",
                borderRadius: "50px",
                fontFamily: "Gotham Light",
              }}
            />
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};
export default TopNavBar;
