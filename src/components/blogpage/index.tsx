import React from "react";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import Image from "next/image";
import { FetchJSONBlogBySlug } from "../../lib/actions";
import Link from "next/link";
import { cn } from "../../lib/utils";

const BlogPage = async (props: any) => {
  // console.log(props, "BLOG SERVER PAGE PROPS!");
  if (!props.slug) return notFound();

  const post = await FetchJSONBlogBySlug(props.slug);

  console.log(post, "POST!!!!!");
  if (!post) return notFound();

  return (
    <div className="min-h-screen flex flex-col gap-2 p-5">
      <Image
        priority
        alt={post?.title}
        width={600}
        height={315}
        src={post?.image_url}
      />
      <div>
        <h1 className="text-4xl text-blue-700 font-black mb-3">
          {post?.title}
        </h1>
        <p className="-mt-2 text-sm">
          Published{" "}
          {new Date(post?.date).toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <Markdown
        className="p-5 md:p-0"
        components={{
          a(props) {
            const { children, className, node, ...rest } = props;
            // console.log(String(props.href)[0]);

            if (String(props.href)[0] === "/") {
              return (
                <Link
                  href={props.href as string}
                  className={cn(
                    className,
                    "text-yellow-500 hover:underline font-semibold my-5"
                  )}
                  // {...rest}
                >
                  {children}
                </Link>
              );
            } else {
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...rest}
                  className={cn(
                    className,
                    "text-yellow-500 hover:underline font-semibold my-5"
                  )}
                >
                  {children}
                </a>
              );
            }
          },
          h1(props) {
            const { children, className, node, ...rest } = props;

            return (
              <h1
                {...rest}
                className={cn(className, "text-3xl font-bold my-5")}
              >
                {children}
              </h1>
            );
          },
          code(props) {
            const { children, className, node, ...rest } = props;

            return (
              <code
                {...rest}
                className={cn(
                  className,
                  "bg-gray-100 text-gray-800 overflow-x-auto font-mono text-sm p-1"
                )}
              >
                {children}
              </code>
            );
          },
          h2(props) {
            const { children, className, node, ...rest } = props;

            return (
              <h2
                {...rest}
                className={cn(className, "text-2xl font-semibold my-4")}
              >
                {children}
              </h2>
            );
          },
          h3(props) {
            const { children, className, node, ...rest } = props;

            return (
              <h3
                {...rest}
                className={cn(className, "text-xl font-semibold my-4")}
              >
                {children}
              </h3>
            );
          },
          p(props) {
            const { children, className, node, ...rest } = props;

            return (
              <p {...rest} className={cn(className, "my-3")}>
                {children}
              </p>
            );
          },
          ul(props) {
            const { children, className, node, ...rest } = props;

            return (
              <ul {...rest} className={cn(className, "")}>
                {children}
              </ul>
            );
          },
          li(props) {
            const { children, className, node, ...rest } = props;

            return (
              <li {...rest} className={cn(className, "my-3")}>
                {children}
              </li>
            );
          },
        }}
      >
        {post?.content}
      </Markdown>
    </div>
  );
};

export default BlogPage;
