import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NarrateJS = ({ options, params, searchParams }) => {
    return (_jsxs("div", { className: "min-h-screen p-5", children: [_jsx("h1", { children: options.backendProvider }), _jsx("p", { children: "Welcome to my home page!" })] }));
};
NarrateJS.getInitialProps = async () => {
    // fetch some data here
    return {
        title: "My Home Page",
        options: { backendProvider: "jsonplaceholder" },
    };
};
export default NarrateJS;
