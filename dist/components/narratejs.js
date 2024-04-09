import { jsx as _jsx } from "react/jsx-runtime";
const NarrateJS = ({ params, searchParams, }) => {
    console.log(params.narratejs?.[0], "params");
    return _jsx("div", { className: "min-h-screen", children: "narratejs" });
};
export default NarrateJS;
