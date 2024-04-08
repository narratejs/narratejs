// index.d.ts

import { NextPage } from "next";

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
    config: {
      backendProvider: "supabase" | "jsonplaceholder"; // Add more backend options as you expand
      supabaseConfig?: {
        supabaseUrl: string;
        supabaseAnonKey: string;
      };
      // Add any other configurations here
    };
  }

  // Declare the BlogProvider component
  export const BlogProvider: React.FC<BlogProviderProps>;

  export interface BlogContextValue {
    addPost: (post: BlogPostProps) => Promise<void>;
    posts: BlogPostProps[];
    // Assuming you have a method to add posts
    // Add other context values here, such as methods to delete or update posts, or perhaps the posts themselves
  }

  // Declare the useBlog hook
  export function useBlog(): BlogContextValue;

  // Define the configuration type for initNarrateJS
  export interface NarrateJSConfig {
    backendProvider: "supabase" | "jsonplaceholder";
    supabaseConfig?: {
      supabaseUrl: string;
      supabaseAnonKey: string;
    };
    // Add other configuration fields as needed
  }

  export function getConfig(): NarrateJSConfig;

  /**
   * Fetches specific blog post by slug name via 3rd party backend.
   * @param {string} slug The slug of the post to fetch the data for.
   * @returns {Promise<any>} The data for the blog post.
   */
  export function fetchPostBySlug(slug: string): Promise<any>;

  /**
   * The Admin component for NarrateJS.
   */
  export const AdminComponent: React.FC<any>;

  /**
   * The NarrateJS Component.
   */
  export const NarrateJS: NextPage;
}
