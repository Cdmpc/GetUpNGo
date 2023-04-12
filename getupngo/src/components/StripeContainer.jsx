import React, { Component } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MvsFcBpvrS4E5FhGk6DSw3FJEhwYK8rvicjWZqRCeovi4LhLVOubhkq1GmOdBvPuX0Zj760neL1vqHb50JKHwll00jiC5ukLF";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
