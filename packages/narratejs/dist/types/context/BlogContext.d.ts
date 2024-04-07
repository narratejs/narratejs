import React from "react";
export interface BlogProviderProps {
    children: React.ReactNode;
}
export declare const BlogProvider: React.FC<BlogProviderProps>;
export default BlogProvider;
export declare const useBlog: () => {
    posts: never[];
    setPosts: React.Dispatch<React.SetStateAction<never[]>>;
};
//# sourceMappingURL=BlogContext.d.ts.map