"use client";

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

// Explicitly typing the props with children
export interface BlogProviderProps {
  children: React.ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const value = { posts, setPosts };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogProvider;

export const useBlog = () => useContext(BlogContext);
