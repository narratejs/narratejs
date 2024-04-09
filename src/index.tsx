import React from "react";
import NarrateJS from "./components/narratejs";
import Test from "./components/test";
import "./output.css";

export { configureOptions, getOptions } from "./components/configureOptions";

export function testFunction(): void {
  console.log("narratejs test function works!");
}

export { NarrateJS, Test };

export function TestComponent() {
  return <div className="text-5xl text-red-600">Hello</div>;
}
