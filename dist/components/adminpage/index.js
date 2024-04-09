import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getOptions } from "../configureOptions";
const AdminPage = () => {
    const options = getOptions();
    const listOptions = () => {
        return Object.entries(options).map(([key, value]) => (_jsx("li", { children: `${key}: ${value}` }, key)));
    };
    // console.log(options);
    return (_jsxs("div", { className: "flex flex-col gap-2 min-h-screen text-red-600", children: [_jsx("h1", { className: "text-6xl font-bold", children: "NarrateJS Admin Page" }), _jsx("h2", { className: "font-bold", children: "Options" }), _jsx("ul", { className: "list-disc", children: listOptions() })] }));
};
export default AdminPage;
