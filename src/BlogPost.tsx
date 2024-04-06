// src/components/BlogPost.tsx

import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => (
  <article>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

export default BlogPost;
