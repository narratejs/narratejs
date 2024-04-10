import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { displayObjectProperties } from "../../lib/util";
const AdminPage = ({ options }) => {
    console.log(options);
    return (_jsxs("div", { className: "flex flex-col min-h-screen p-5", children: [_jsxs("div", { className: "flex gap-2 items-center mb-4", children: [_jsx("img", { src: "https://www.narratejs.com/images/narratejs_logo.png", className: "w-10" }), _jsx("h1", { className: "text-4xl font-bold", children: "NarrateJS Admin Page" })] }), _jsx("div", { children: displayObjectProperties(options) })] }));
};
export default AdminPage;
