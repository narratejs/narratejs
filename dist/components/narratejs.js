import { jsx as _jsx } from "react/jsx-runtime";
import MainPage from "./mainpage";
import AdminPage from "./adminpage";
const NarrateJS = ({ params, searchParams, }) => {
    console.log(params.narratejs?.[0], "params");
    if (!params.narratejs?.[0]) {
        return _jsx(MainPage, {});
    }
    if (params.narratejs?.[0] === "admin") {
        return _jsx(AdminPage, {});
    }
    return _jsx("div", { className: "min-h-screen", children: "narratejs" });
};
export default NarrateJS;
