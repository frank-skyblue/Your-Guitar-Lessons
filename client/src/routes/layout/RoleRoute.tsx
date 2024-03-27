import React from "react";
import { Navigate } from "react-router-dom";

// TODO: Remove this line after implementing authorization
const userAdmin = false;

export default function RoleRoute(props: { element: any; admin: any }) {
  if (userAdmin) {
    return props.admin;
  } else {
    return props.element;
  }
}
