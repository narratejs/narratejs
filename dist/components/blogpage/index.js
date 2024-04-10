import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
const BlogPage = (props) => {
    const router = useRouter();
    console.log(router);
    // console.log(props, "BLOG PAGE PROPS!");
    return (_jsxs("div", { className: "min-h-screen flex flex-col gap-2 items-center justify-center", children: [_jsx("h1", { className: "text-4xl text-blue-700 font-black mb-5", children: "Blog Page" }), _jsx("p", { children: "This is the blog page." })] }));
};
export default BlogPage;
