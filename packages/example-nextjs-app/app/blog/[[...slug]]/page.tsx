"use client";

import { useBlog } from "narratejs";
import React from "react";

const Page = ({ params }: { params: { slug: any } }) => {
  // const blog = await getBlogBySlug(params.slug)
  // const { posts } = useBlog();
  // console.log(posts);

  return <div>Client page. Hooks can be used here.</div>;
};

export default Page;
