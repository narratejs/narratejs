import { jsx as _jsx } from "react/jsx-runtime";
import AdminPage from "../adminpage";
import MainPage from "../mainpage";
import BlogPage from "../blogpage";
const NarrateJS = ({ options, params, searchParams }) => {
    console.log(params, "PARAMS");
    console.log(options, "OPTIONS");
    if (!params?.narratejs)
        return _jsx(MainPage, {});
    if (params?.narratejs?.[0] === options.adminSlug)
        return _jsx(AdminPage, { options: options });
    return _jsx(BlogPage, { options: options, slug: params.narratejs });
};
export default NarrateJS;
