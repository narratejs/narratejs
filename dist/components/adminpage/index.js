import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getOptions } from "../configureOptions";
const AdminPage = () => {
    const options = getOptions();
    const listOptions = () => {
        return Object.entries(options).map(([key, value]) => (_jsx("li", { children: `${key}: ${value}` }, key)));
    };
    console.log(options);
    return (_jsxs("div", { className: "min-h-screen flex flex-col gap-2 items-center justify-center", children: [_jsx("h1", { className: "text-2xl font-bold", children: "NarrateJS Admin Page" }), _jsx("ul", { className: "list-disc", children: listOptions() })] }));
};
export default AdminPage;
