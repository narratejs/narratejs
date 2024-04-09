import { jsx as _jsx } from "react/jsx-runtime";
import NarrateJS from "./components/narratejs";
import Test from "./components/test";
import "./output.css";
export { configureOptions, getOptions } from "./components/configureOptions";
export function testFunction() {
    console.log("narratejs test function works!");
}
export { NarrateJS, Test };
export function TestComponent() {
    return _jsx("div", { className: "text-5xl text-red-600", children: "Hello" });
}
