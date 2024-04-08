import React from "react";
import AdminComponent from "../admin-component";
import { fetchPostBySlug } from "src/server";
import { notFound } from "next/navigation";
import BlogProvider from "src/context/BlogContext";

export default async function NarrateJS({
  children,
  config,
  params,
}: Readonly<{
  children: React.ReactNode;
  config: any;
  params: { slug: string };
}>) {
  //   console.log(params.slug);
  if (params.slug?.[0] === "admin") return <AdminComponent />;
  const post = await fetchPostBySlug(params.slug);
  if (!post) notFound();

  //   console.log(post);

  //   console.log(post());
  return (
    <BlogProvider config={config}>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
        <p className="mb-10">{post?.body}</p>
        {children}
      </div>
    </BlogProvider>
  );
}
