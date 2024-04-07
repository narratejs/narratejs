"use client";

import { BlogProviderProps } from "narratejs";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

const BlogContext = createContext({
  posts: [],
  setPosts: (() => {}) as Dispatch<SetStateAction<never[]>>,
});

export const BlogProvider: React.FC<BlogProviderProps> = ({
  children,
  config,
}: BlogProviderProps) => {
  const [posts, setPosts] = useState([]);
  const [supabase, setSupabase] = useState(null);

  useEffect(() => {
    if (config.backendProvider === "supabase" && config.supabaseConfig) {
      // Initialize Supabase client
      // const supabaseClient = createClient(
      //   config.supabaseConfig.supabaseUrl,
      //   config.supabaseConfig.supabaseAnonKey
      // );
      // setSupabase(supabaseClient);
    }
    // Handle initialization for other backends as you add support for them
  }, [config]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setPosts(data);
    // console.log(data, "POSTS...........");
  };

  useEffect(() => {
    // console.log("BLOG CONTEXT USE EFFECT RAN.. FETCHING POSTS...");
    fetchPosts();
  }, []);

  const value = { posts, setPosts };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogProvider;

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
