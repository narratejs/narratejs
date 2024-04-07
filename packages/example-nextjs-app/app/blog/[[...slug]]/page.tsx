import React from "react";
import { BlogPost, BlogProvider } from "narratejs";

const Page = async ({ params }: { params: { slug: any } }) => {
  // const blog = await getBlogBySlug(params.slug)
  return <div>Hello World. Page.</div>;
};

export default Page;
