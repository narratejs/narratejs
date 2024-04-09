import { jsx as _jsx } from "react/jsx-runtime";
const Test = (props) => {
    console.log(props, "PROPS");
    return _jsx("div", { children: "test" });
};
export default Test;
