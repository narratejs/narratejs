import React from "react";
import { BlogPost } from "narratejs";

const Page = ({ params }: { params: { slug: any } }) => {
  console.log(params);
  return (
    <div>
      <BlogPost />
    </div>
  );
};

export default Page;
