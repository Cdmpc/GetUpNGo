import React from "react";
import GGLogo from "../images/GGLogo.png";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

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
    url: "/findabike",
  },
];

const TopNavBar = () => {
  let nav = useNavigate();
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
              height={110}
              width={180}
              style={{ padding: "5px", marginLeft: "15px" }}
            />
          </Link>
        }
        end={
          <div className="flex flex-wrap justify-content-center gap-4">
            <Button
              className="p-button-danger"
              label="Become a Go-Getter"
              style={{
                borderRadius: "50px",
                fontFamily: "Gotham Light",
              }}
              onClick={() => nav("/signup")}
            />
            <Button
              className="p-button-primary"
              label="Log In"
              style={{
                borderRadius: "50px",
                fontFamily: "Gotham Light",
              }}
              onClick={() => {
                nav("/login");
              }}
            />
          </div>
        }
      />
    </React.Fragment>
  );
};
export default TopNavBar;
