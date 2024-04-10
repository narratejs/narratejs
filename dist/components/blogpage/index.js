import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import Image from "next/image";
import { FetchJSONBlogBySlug } from "../../lib/actions";
import Link from "next/link";
import { cn } from "../../lib/utils";
const BlogPage = async (props) => {
    console.log(props, "BLOG SERVER PAGE PROPS!");
    if (!props.slug)
        return notFound();
    const post = await FetchJSONBlogBySlug(props.slug);
    console.log(post);
    if (!post)
        return notFound();
    return (_jsxs("div", { className: "min-h-screen flex flex-col gap-2 p-5", children: [_jsx(Image, { alt: post?.title, width: 600, height: 315, src: post?.image_url }), _jsxs("div", { children: [_jsx("h1", { className: "text-4xl text-blue-700 font-black mb-3", children: post?.title }), _jsxs("p", { className: "-mt-2 text-sm", children: ["Published", " ", new Date(post?.date).toLocaleDateString("en-us", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })] })] }), _jsx("div", { children: _jsx(Markdown, { className: "p-5 md:p-0", components: {
                        a(props) {
                            const { children, className, node, ...rest } = props;
                            // console.log(String(props.href)[0]);
                            if (String(props.href)[0] === "/") {
                                return (_jsx(Link, { href: props.href, className: cn(className, "text-yellow-500 hover:underline font-semibold my-5"), children: children }));
                            }
                            else {
                                return (_jsx("a", { target: "_blank", rel: "noopener noreferrer", ...rest, className: cn(className, "text-yellow-500 hover:underline font-semibold my-5"), children: children }));
                            }
                        },
                        h1(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("h1", { ...rest, className: cn(className, "text-3xl font-bold my-5"), children: children }));
                        },
                        code(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("code", { ...rest, className: cn(className, "bg-gray-100 text-gray-800 overflow-x-auto font-mono text-sm p-1"), children: children }));
                        },
                        h2(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("h2", { ...rest, className: cn(className, "text-2xl font-semibold my-4"), children: children }));
                        },
                        h3(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("h3", { ...rest, className: cn(className, "text-xl font-semibold my-4"), children: children }));
                        },
                        p(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("p", { ...rest, className: cn(className, "my-3"), children: children }));
                        },
                        ul(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("ul", { ...rest, className: cn(className, ""), children: children }));
                        },
                        li(props) {
                            const { children, className, node, ...rest } = props;
                            return (_jsx("li", { ...rest, className: cn(className, "my-3"), children: children }));
                        },
                    }, children: post?.content }) })] }));
};
export default BlogPage;
