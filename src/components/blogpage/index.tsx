import React from "react";
import { useRouter } from "next/navigation";

const BlogPage = (props: any) => {
  const router = useRouter();

  console.log(router);
  // console.log(props, "BLOG PAGE PROPS!");
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-4xl text-blue-700 font-black mb-5">Blog Page</h1>
      <p>This is the blog page.</p>
    </div>
  );
};

export default BlogPage;
