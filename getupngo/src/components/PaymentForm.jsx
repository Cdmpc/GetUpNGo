import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import GGLogo from "../images/GGLogo.png";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";

const cardStyle = {
  style: {
    base: {
      color: "#32e68f",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#56cc93",
      },
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function PaymentForm() {
  let nav = useNavigate();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const isLoggedIn = window.localStorage.getItem("loginStat");

  let price;

  /** Stores the purchase in Strips DB, and MYSQL Database. */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        if (isLoggedIn) {
          price = 800;
        } else {
          price = 1500;
        }
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: price,
          id,
          license_plate_no: window.localStorage.getItem("Bike_Rented"),
          email: email,
          Fname: Fname,
          Lname: Lname,
        });
        if (response.data.success) {
          console.log("Successful transaction!");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error ", error);
      }
    }
  };

  if (isLoggedIn) {
    price = 8;
  } else {
    price = 15;
  }

  return (
    <React.Fragment>
      {!success ? (
        <div
          className="surface-card p-5 shadow-6 border-round-3xl lg:w-6 absolute"
          style={{ animation: "fadeinup 1.1s" }}
        >
          {/** EVERTYHING WRAPPED UNDER HERE WILL BE RENDERED IN THE WHITE CARD BOX. */}
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
            <div className="text-900 text-2xl font-medium mb-3">
              Enter your payment info to rent the bike!
            </div>
            <div>
              <label className="block text-900 font-medium mb-5">
                Billing Email
              </label>
              <InputText
                type="text"
                placeholder="Billing Email"
                className="w-full mb-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="block text-900 font-medium mb-5">
                First Name
              </label>
              <InputText
                type="text"
                placeholder="First Name"
                className="w-full mb-3"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <label className="block text-900 font-medium mb-5">
                Last Name
              </label>
              <InputText
                type="text"
                placeholder="Last Name"
                className="w-full mb-3"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
              <label className="block text-900 font-medium mb-5">
                Card Number
              </label>
              <CardElement options={cardStyle} />
              <Button
                label="Confirm Rent"
                icon="pi pi-credit-card"
                className="w-5"
                rounded
                severity="success"
                style={{ marginTop: "50px" }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
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
            <h2 style={{ fontFamily: "Gotham Light" }}>
              Congrats! You have reserved a bike!
            </h2>
            {isLoggedIn ? (
              <p>
                You will be billed:{" "}
                {"$" + price + " plus an hourly rate of $2/h"}
              </p>
            ) : (
              <p>
                You will be billed:{" "}
                {"$" + price + " plus an hourly rate of $5/h"}
              </p>
            )}
            <Button
              icon="pi pi-arrow-left"
              label="Back to Home Page"
              className="mt-5"
              severity="help"
              style={{ borderRadius: "50px" }}
              onClick={() => nav("/")}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
