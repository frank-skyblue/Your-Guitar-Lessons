import React from "react";
import { Navigate } from "react-router-dom";

// TODO: Remove this line after implementing authentication
const userToken = true;

export default function DynamicRoute(props: {
  authenticationPage: boolean;
  landingPage: boolean;
  element: any;
}) {

  if (props.authenticationPage && userToken) {
    return <Navigate to="/" />;
  } else if (!props.authenticationPage && !props.landingPage && !userToken) {
    return <Navigate to="/about" />;
  } else {
    return props.element;
  }
}
