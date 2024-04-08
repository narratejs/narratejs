"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
const BlogContext = createContext({
    posts: [],
    setPosts: (() => { }),
});
export const BlogProvider = ({ children, config, }) => {
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
    return _jsx(BlogContext.Provider, { value: value, children: children });
};
export default BlogProvider;
export const useBlog = () => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
};
