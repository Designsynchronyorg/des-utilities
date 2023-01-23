import React from "react";

export default function BindThis(self: any, methods: any) {
  return methods.map((method: any) => (self[method] = self[method].bind(self)));
}
