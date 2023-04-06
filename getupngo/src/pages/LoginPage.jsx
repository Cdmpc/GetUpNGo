import React from "react";
import CrossWalk from "../images/crosswalk.jpg";

import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { bgImg } from "../components/BgText";
export default function LoginPage() {
  return (
    <React.Fragment>
      <img
        src={CrossWalk}
        alt="A crosswalk with a bike painted on the road"
        style={{ ...bgImg, height: "800px" }}
      />
    </React.Fragment>
  );
}
