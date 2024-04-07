// index.d.ts

declare module "narratejs" {
  import * as React from "react";

  // Declare the BlogPostProps interface
  export interface BlogPostProps {
    title: string;
    content: string;
  }

  // Declare the BlogPost component
  export const BlogPost: React.FC<BlogPostProps>;

  // Declare the BlogProviderProps interface
  export interface BlogProviderProps {
    children: React.ReactNode;
  }

  // Declare the BlogProvider component
  export const BlogProvider: React.FC<BlogProviderProps>;
}
