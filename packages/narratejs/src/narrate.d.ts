// narratejs.d.ts
declare module "narratejs" {
  export interface BlogProviderProps {
    children: React.ReactNode;
  }

  export const BlogProvider: React.ComponentType<BlogProviderProps>;
  // Add more specific types for other exports as needed
}
