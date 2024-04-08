import React from "react";
import AdminComponent from "../admin-component";
import { notFound } from "next/navigation";

import { BlogProvider, fetchPostBySlug } from "narratejs";
import { NextPage } from "next";

const NarrateJS: NextPage = (props: any, ...rest: any) => {
  console.log(props, "props...");
  console.log(rest);
  //   console.log(params.slug);
  // if (params.slug?.[0] === "admin") return <AdminComponent />;
  // const post = await fetchPostBySlug(params.slug);
  // if (!post) notFound();

  //   console.log(post);

  //   console.log(post());
  return (
    <>
      <div>Hello World</div>
    </>
    // <BlogProvider config={{ backendProvider: "jsonplaceholder" }}>
    //   <div className="p-5">
    //     {/* <h1 className="text-2xl font-bold mb-2">{post?.title}</h1> */}
    //     {/* <p className="mb-10">{post?.body}</p> */}
    //     <div>hello world</div>
    //   </div>
    // </BlogProvider>
  );
};

export default NarrateJS;
