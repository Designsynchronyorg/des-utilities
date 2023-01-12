import React from "react";
import { useParams } from "react-router-dom";

export default function dynamicComponent(Component: any) {
  return (props) => <Component {...props} params={useParams()} />;
}
