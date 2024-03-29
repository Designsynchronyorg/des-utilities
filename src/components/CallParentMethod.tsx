import React from "react";

export default function CallParentMethod(
  self: any,
  methodName: any,
  properties: any
) {
  // if there's a process response prop
  if (self.props[methodName]) {
    self.props[methodName](properties);
    return true;
  } else {
    return false;
  }
}
